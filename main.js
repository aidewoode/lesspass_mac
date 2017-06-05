const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow () {
  win = new BrowserWindow({ width: 320, height: 550 });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/app.html'),
    protocol: 'file:',
    slashes: true
  }));

  if (process.env.NODE_ENV == 'development') {
    win.webContents.openDevTools();
  }

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
