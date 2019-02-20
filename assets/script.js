Cypress.$(document).ready(function() {
  function updateMousePositionIndicator(e) {
    const x = e.clientX;
    const y = e.clientY;

    document.getElementById(
      'cypress-mouse-position-indicator',
    ).innerHTML = mousePositionText(x, y);
  }

  function mousePositionText(x, y) {
    return `
    Mouse Position<br />
    clientX: ${x}<br />
    clientY: ${y}<br />
    `;
  }

  const mousePositionIndicator = Cypress.$(
    `
    <div id="cypress-mouse-position-indicator">
      ${mousePositionText(0, 0)}
    </div>
  `,
  );

  Cypress.$(document.body).append(mousePositionIndicator);
  const baseUrl = Cypress.config().baseUrl
  document.querySelector('.aut-iframe').addEventListener('load', function() {
    this.contentWindow.document.body.onmousemove = updateMousePositionIndicator;
  })
});
