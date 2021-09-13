const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    title: '谷歌翻译----By SinyLi',
    webPreferences: {
      nativeWindowOpen: true
    }
  })

  win.loadURL('https://translate.google.cn/?hl=zh-CN');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
