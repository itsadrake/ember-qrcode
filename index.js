/* jshint node: true */
'use strict';

module.exports =
{
	name: 'ember-qrcode',
	included: function(app)
	{
		this._super.included(app);
		app.import(app.bowerDirectory + '/qrcode/lib/qrcode.js');
	}
};
