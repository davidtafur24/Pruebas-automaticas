describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


function randomClick() {
    {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
            }
            cy.wait(1000);
        });
    }   
}

function randomButton(){
    cy.get('button').then($btn =>{
        var randomButton = $btn.get(getRandomInt(0,$btn.length));
        if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({force: true});
        }
        cy.wait(1000);
    });
}

function randomText(){
    cy.get('input').then($text =>{
        var randomText = $text.get(getRandomInt(0,$text.length));
        if(!Cypress.dom.isHidden(randomText)) {
            cy.wrap(randomText).click({force: true}).type("D");
        }
        cy.wait(1000);
    }); 
}

function randomCombo(){
    var functions = [randomButton,randomClick,randomText];
    functions[getRandomInt(0,2)]();
    cy.wait(1000);
    functions[getRandomInt(0,2)]();
    cy.wait(1000);
    functions[getRandomInt(0,2)]();
    cy.wait(1000);
}


function randomEvent(monkeysLeft){
    var monkeysLeft = monkeysLeft;
    var event = getRandomInt(1,4);
    //var event = 4;

    if(monkeysLeft > 0) {
        if(event == 1){
        randomText();
        monkeysLeft = monkeysLeft - 1;
        randomEvent(monkeysLeft);        
        }
        
        if(event == 2){
        randomButton();
        monkeysLeft = monkeysLeft - 1;
        randomEvent(monkeysLeft);        
        }
        
        if(event == 3){
        randomClick();
        monkeysLeft = monkeysLeft - 1;
        randomEvent(monkeysLeft);        
        }

        if(event == 4){
            randomCombo();
            monkeysLeft = monkeysLeft - 1;
            randomEvent(monkeysLeft);        
        }

    }
}