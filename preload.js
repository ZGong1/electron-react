const {contextBridge} = require("electron");

contextBridge.exposeInMainWorld("electron", {
    homeDir: "test",
});


contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node
})