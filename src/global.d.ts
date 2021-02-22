// 全局ts环境配置
declare global {
  const __BUILD_TIME__: number;
  const __static: string;

  interface Window {
    app: Electron.App;
    ipcMain: Electron.IpcMain;
    ipcRenderer: Electron.IpcRenderer;
    electron: Electron;
    remote: Electron.Remote;
  }
}
// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};
