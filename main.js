const { app, BrowserWindow } = require('electron');
const path = require('path');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1080,
        height: 1920,
        fullscreen: false,
        frame: true,
        autoHideMenuBar: false,
        kiosk: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    // win.maximize();
    win.loadFile('index.html')
    win.loadURL('http://192.168.29.162:8080/smart-mirror-renderer');


}
  
app.whenReady().then(() => {
    createWindow()
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
 })