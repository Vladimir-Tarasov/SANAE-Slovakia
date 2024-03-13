export class SearchContent {
    name = 'div.subcategories h3.subcategories__name';

    checkName(name) {
        cy.get(this.name).invoke('text')
            .should('include', name);
    }
}