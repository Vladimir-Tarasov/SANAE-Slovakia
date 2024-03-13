export class ProductList {
    button = {
        toCart: 'section.product-box button.btn-icon'
    };

    addToCart(n) {
        cy.get(this.button.toCart).should('be.visible');
        cy.get(this.button.toCart).eq(n).click();
    }
}