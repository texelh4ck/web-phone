const { app, BrowserWindow, session, ipcMain } = require("electron")

const main = () => {
    const win = new BrowserWindow({
        width: 350,
        height: 600,
        titleBarStyle: 'customButtonsOnHover',
        frame: false,
        transparent: true,
        resizable: false,
        alwaysOnTop: true,
        icon: "images/logo.png",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile("src/index.html");
    
    // Desavilita X-Frame-Option
    // Permite el contenido online del iframe
    win.webContents.session.webRequest.onHeadersReceived({ urls: [ "*://*/*" ] },
        (d, c)=>{
            if(d.responseHeaders['X-Frame-Options']){
            delete d.responseHeaders['X-Frame-Options'];
        } else if(d.responseHeaders['x-frame-options']) {
            delete d.responseHeaders['x-frame-options'];
        }
        
        c({cancel: false, responseHeaders: d.responseHeaders});
    });


    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = process.env.MOBILE_UA,
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });

}

ipcMain.on("userAgent", (e, ua) => {
    process.env.MOBILE_UA = ua;
})

app.whenReady().then(() => {
    main();
})