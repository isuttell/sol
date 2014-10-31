# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'mc2'
set :repo_url, 'git@git.e-mc2.com:mc-squared/mc-squared.git'
set :deploy_via, :remote_cache

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

# Default deploy_to directory is /var/www/my_app
set :deploy_to, '/home/emc2/production/mc2'

# Default value for :scm is :git
set :scm, :git

# Default value for :format is :pretty
set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :debug

# Default value for :pty is false
set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
set :linked_dirs, %w{logs www}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 5

namespace :npm do

  desc "Running npm install"
  task :install do
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do
        releases = capture("ls #{File.join(fetch(:deploy_to), 'releases')}")
        if (last_release = releases.split("\t").sort.last)
          execute :mkdir, "-p #{releases_path}/#{last_release}/node_modules"
          execute "if test ! -d #{release_path}/node_modules; then cp -r #{releases_path}/#{last_release}/node_modules #{release_path}/; fi;"
        end
        execute :npm, "install --loglevel warn --ignore-scripts --no-colors"
      end
    end
  end

end

namespace :bower do

  desc "Running bower install"
  task :install do
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do
        execute :bower, "install --no-color  --config.interactive=false"
      end
    end
  end

end


namespace :grunt do

  desc "Running grunt build"
  task :build do
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do
        execute :grunt, "build --no-color"
      end
    end
  end

end

namespace :server do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do
        execute :supervisorctl, "restart #{fetch(:programs_names)}"
      end
    end
  end

  desc 'Start application'
  task :start do
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do
        execute :supervisorctl, "start #{fetch(:programs_names)}"
      end
    end
  end

  desc 'Stop application'
  task :stop do
    on roles(:app), in: :sequence, wait: 5 do
      within release_path do
        execute :supervisorctl, "stop #{fetch(:programs_names)}"
      end
    end
  end

end


namespace :deploy do

  after :updated, "npm:install"
  after :updated, "bower:install"
  after :updated, "grunt:build"

  after :publishing, "server:restart"

end
