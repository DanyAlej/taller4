describe('Wikipedia under monkeys', function() {
    it('visits wikipedia and survives monkeys', function() {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        cy.wait(1000);
        randomClick(10);
        randomEvent(10); 
    })
})
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

function randomClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(500);
            randomClick(monkeysLeft);
        });
    }   
}

function randomEvent(monkeysLeft) {
  if(monkeysLeft > 0) {
    var number = getRandomInt(0, 3);
    console.log(number);
    switch(number) {
      case 0:
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        cy.wait(1000);
        cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft);
        });
      break;
      case 1:
        cy.visit('https://es.wikipedia.org/w/index.php?title=Especial:Crear_una_cuenta');
        cy.wait(1000);
        cy.get('input').then($input => {
          var randomInput = $input.get(getRandomInt(0, $input.length));
          if(!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type('meditation', {force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft)
        });
      break;
      case 2:
        cy.visit('https://www.wikipedia.org');
        cy.wait(1000);
        cy.get('select').then($combobox => {
          var randomCombobox = $combobox.get(getRandomInt(0, $combobox.length));
          if(!Cypress.dom.isHidden(randomCombobox)) {
            cy.wrap(randomCombobox).get('option').then($options => {
              var randomOption = $options.get(getRandomInt(0, $options.length));
              cy.wrap(randomCombobox).select(randomOption.value, {force: true});
            });
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft)
        });
      break;
      case 3:
        cy.visit('https://es.wikipedia.org/w/index.php?title=Curcuma_longa&action=history');
        cy.wait(1000);
        cy.get('button').then($buttons => {
          var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
          if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click();
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft)
        });
      break;
    }
  }
}
