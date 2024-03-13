export class Header {
    input = {
        search: 'div#header input.search-box__input'
    };

    button = {
        search: 'div#header button.search-box__button'
    };

    link = {
        basket: 'div#header div.basket-box a.basket-box__link span.basket-box__info .basket-box__price'
    };

    enterBrand(name) {
        cy.get(this.input.search).type(name);
        return this;
    }

    submit() {
        cy.get(this.button.search).click();
    }
}