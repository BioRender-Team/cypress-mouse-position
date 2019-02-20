const {PATH_CSS, PATH_JS} = require('./paths');
const {NO_LOG} = require('./constants');
const {GET_FILE} = require('./tasks/taskNames');

const FILE_CACHE = {};

function readFile(fileType) {
  if (!FILE_CACHE[fileType]) {
    FILE_CACHE[fileType] = cy.task(GET_FILE, fileType, NO_LOG);
  }
  return FILE_CACHE[fileType];
}

function initUi() {
  const $head = Cypress.$(window.parent.window.document.head);

  if ($head.find('#cypress-mouse-position-styles').length > 0) {
    return;
  }

  readFile(PATH_CSS).then((content) => {
    $head.append(`<style id="cypress-mouse-position-styles">${content}</style>`);
  });

  readFile(PATH_JS).then((content) => {
    $head.append(`<script>${content}</script>`);
  });
}

module.exports = {
  initUi,
};
