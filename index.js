var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var menubar = require('menubar');

var mb = menubar({
	height: 50,
	width: 380,
	icon: './src/img/menubar_icon.png',
	index: 'file://' + __dirname + '/src/index.html'
});

mb.on('after-create-window', function() {
  // mb.window.openDevTools()
  mb.window.setResizable(false);
	mb.tray.setPressedImage('./src/img/menubar_icon_pressed.png');
})

mb.on('ready', function ()  {
	console.log('Nimble is ready');

	mb.tray
		.on('click', click)
		.on('right-click', rightClick);

	function click(e, bounds) {
		console.log('left click');
		// what am i gonna do with this
	}

	function rightClick (e, bounds) {
		var altMenu = Menu.buildFromTemplate([
			{ label: 'Preferences', click: function() { console.log('Coming Soon')} },
			{ label: 'Quit', accelerator: 'Command+Q', click: function() { app.quit(); } }
		]);

		mb.tray.setContextMenu(altMenu);
	}

})
