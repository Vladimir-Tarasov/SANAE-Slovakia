export class Basket {
    box = {
        product: 'section.product-box'
    };

    link = {
        remove: 'div.product-group section.product-box a.remove-link'
    };

    button = {
        continue: 'div.side-panel__controls button.btn-success'
    };

    checkProductCount(n) {
        cy.get(this.box.product).should('have.length', n);
        return this;
    }

    remove() {
        cy.get(this.link.remove).eq(0).click();
        return this;
    }

    checkContinueIsVisible() { //TODO: find better name
        cy.get(this.button.continue).should('be.visible');
        return this;
    }

    checkContinueIsNotVisible() { //TODO: find better name
        cy.get(this.button.continue).should('not.exist');
        return this;
    }
}