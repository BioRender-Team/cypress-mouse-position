const {GET_FILE} = require('./src/tasks/taskNames');
const {getFile} = require('./src/tasks/getFile');

function initCypressMousePositionPlugin(on) {
  on('task', {
    [GET_FILE]: getFile,
  });
}

module.exports = initCypressMousePositionPlugin;
