const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const url = require("url")


function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          // sandbox: false,
          preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadURL("http://localhost:3000/");
}


app.whenReady().then(createMainWindow);