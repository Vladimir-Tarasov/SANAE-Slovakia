export class PrebasketSidebar {
    button = {
        close: 'div#prebasket-sidebar .b-sidebar-header button.close',
        checkoutCart: 'div#prebasket-sidebar .b-sidebar-footer a.btn-success'
    };

    close() {
        cy.get(this.button.close).click();
    }

    checkoutCart() {
        cy.get(this.button.checkoutCart).click();
    }
}