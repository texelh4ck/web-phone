const { app, BrowserWindow } = require("electron")

const main = () => {
    const win = new BrowserWindow({
        width: 350,
        height: 600,
        titleBarStyle: 'customButtonsOnHover',
        frame: false,
        transparent: true,
        resizable: false,
        alwaysOnTop: true,
    })
    win.loadFile("src/index.html");
}

app.whenReady().then(() => {
    main();
})