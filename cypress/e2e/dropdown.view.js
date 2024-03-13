export class Dropdown {
    button = {
        sorting: 'div#category-sticky-controls button.dropdown-toggle',
        expensive: 'div#category-sticky-controls ul.dropdown-menu--xs-full li:nth-child(1)'
    };

    selectExpensive() {
        cy.get(this.button.sorting).click();
        cy.get(this.button.expensive).click();
    }
}