import Ember from 'ember';

export default Ember.Component.extend(
{
	tagName: 'canvas',
	classNames: ['qr-code'],
	attributeBindings: ['width', 'height'],
	width: 200,
	height: 200,
	light: '#FFFFFF',
	dark: '#000000',
	ctx: null,
	data: '',
	
	dataChanged: function() {
		this.draw();
	}.observes('data'),

	drawObserver: Ember.observer('data', 'light', 'dark', function()
	{
  	this.draw();
	}),

	didInsertElement: function()
	{
		this.set('ctx', this.get('element').getContext('2d'));
		return this.draw();
	},

	empty: function()
	{
		var ctx = this.get('ctx');
		ctx.fillStyle = this.get('light');
		return ctx.fillRect(0, 0, this.get('width'), this.get('height'));
	},

	draw: function()
	{
		this.empty();
		var data = this.get('data');
		var ctx = this.get('ctx');
		var width = this.get('width');
		var height = this.get('height');

		var qr = new QRCode(0, 1);
		qr.addData(data);
		qr.make();

		var size = qr.getModuleCount();

		var cwidth = Math.floor(width / size);
		var cheight = Math.floor(height / size);

		function cx(x) {return x * cwidth;};
		function cy(y) {return y * cheight;};

		ctx.fillStyle = this.get('dark');
		for (var row = 0; row < size; ++row)
			for (var col = 0; col < size; ++col)
				if (qr.isDark(row, col))
					ctx.fillRect(cx(row), cy(col), cwidth, cheight);
	}
});
