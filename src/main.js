const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    Menu.setApplicationMenu(null);
    win.loadFile(path.join(__dirname, '../index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
