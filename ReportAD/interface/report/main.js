const { app, BroserWindow} = require('electron')

let win;

function createWindow(){
    win = new BroserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: 'file://${__dirname}/dist/assets/logo.png'
    })

    win.loadURL('file://${__dirname}/dist/index.html')

    win.on('closed',function(){
        win = null
    })

    win.on('ready', createWindow)

    win.on('window-all-closed', function(){
        if(process.platform !== 'darwin'){
            app.quit()
        }
    })

    app.on('activate', function(){
        if(win === null){
            createWindow()
        }
    })
}