const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const _windowOptions = {
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
    }
};

let _browserWindow;

// config later for dev mode and dev-tools open by default
const createWindow = () => {
    _browserWindow = new BrowserWindow(_windowOptions);
    _browserWindow.loadFile('dist/index.html');

    // destroy window on close event
    _browserWindow.on('closed', () => {
        _browserWindow = null;
    });
}

// create window on init
app.whenReady().then(() => {
    createWindow();
});

// quit app when all windows closed
app.on('window-all-closed', () => {

    // check if mac, else quit
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// createWindow if active event fires
app.on('activate', () => {
    if (_browserWindow === null) {
        createWindow();
    }
});