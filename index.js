var Jasmine = require('jasmine');
var Reporter = require('./lib/reporter');
var reporter = new Reporter();
var jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.env.addReporter(reporter);
jasmine.execute();