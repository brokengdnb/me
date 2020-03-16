// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

var app = require('electron').remote;
var dialog = app.dialog; // Load the dialogs component of the OS
var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)



window.openSaveWindow = function(data){
  dialog.showSaveDialog((fileName) => {
    if (fileName === undefined){
      console.log("You didn't save the file");
      return;
    }

    console.info(data);



    fs.writeFile(fileName, data, function (err) {
      if (err === undefined) {
        dialog.showMessageBox({
          message: 'The file has been saved!',
          buttons: ['OK']
        });
      } else {
        dialog.showErrorBox('File save error', err.message);
      }
    });

  });
};



window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }


});
