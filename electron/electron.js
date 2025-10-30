const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors");
  app.commandLine.appendSwitch("disable-site-isolation-trials");

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      webSecurity: false, // disables CSP and CORS checks
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // W trybie dev ładuj serwer Expo
  if (process.env.ELECTRON_START_URL) {
    win.loadURL(process.env.ELECTRON_START_URL);
  } else {
    // W produkcji ładuj lokalny build (po "expo export")
    // eslint-disable-next-line no-undef
    win.loadFile(path.join(__dirname, "dist/web/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
