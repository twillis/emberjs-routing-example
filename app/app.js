/*global Ember, require*/
require('dependencies/jquery-1.8.3');
require('dependencies/handlebars-runtime');
require('dependencies/ember');
require('dependencies/compiled/templates');


//create app and app namespace used by all other modules

window.App = Ember.Application.create({});

//require other modules to compose the application
require("app/models");
require("app/views");
require("app/controllers");
require("app/router");
