export class Cookies {
    button = {
        accept: 'div.exponea-cookie span#cookies-agree'
    };

    accept() {
        cy.get(this.button.accept).click();
        cy.get(this.button.accept).should('not.exist');
    }
}