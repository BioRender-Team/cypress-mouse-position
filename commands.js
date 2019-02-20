const {initUi} = require('./src/ui');
function initCypressMousePositionCommands() {
  // Inject CSS & JavaScript
  before(() => {
    initUi();
  });
}

initCypressMousePositionCommands();
