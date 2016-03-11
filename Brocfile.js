/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon
({
	vendorFiles:
	{
		'handlebars.js': null
	}
});

app.import(app.bowerDirectory + '/qrcode/lib/qrcode.js');

module.exports = app.toTree();

