# Sol.js
Node.js framework built around Express.js

[![Build Status](https://travis-ci.org/isuttell/sol-core.svg)](https://travis-ci.org/isuttell/sol-core)

- - -

## Description
An experiment in creating a simple and lean node.js framework that forces
strong coding standards and unit testing techniques.


## Documentation

Documentation can be found at [http://isuttell.github.io/sol](http://isuttell.github.io/sol)


## Development

Sol is split into two repositories. The current respository and [Sol Core](https://github.com/isuttell/sol-core). Sol Core contains the node.js backend and is configured by the files found in this repo. The current repo contains the project specific configuration, controllers, models and views.

### Coding Standards

Sol.js uses Google coding standards with the help of [grunt-jscs](https://github.com/jscs-dev/grunt-jscs). The default grunt task watches for any file changes and automatically runs a coding standard check.

### Assets

Running `grunt` will automatically watch the assets folder and update it for
development. Assets are located in the `assets` folder. Grunt automatically processes any changes in this folder into the `.tmp` directory. During this process things like Compass/SCSS are run. Filres in this folder are not compressed or minified for easier development. By default, the app uses `.tmp/public` as a static folder.

For production, everything is copied out of the `.tmp/folder`, compressed or minified, and then copied into the `www` folder.