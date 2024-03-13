export class MainMenu {
    item = {
        mobilePc: '.main-menu__item:nth-child(4)',
        mobile: '.main-menu__list--2 li.main-menu__item:nth-child(2)',
        smartphones: '.main-menu__list--3 li.main-menu__item:nth-child(2) ',
        allSmartphones: '.main-menu__level--4 a.main-menu__link--all'
    };

    selectMobile() {
        cy.get(this.item.mobilePc).click();
        cy.get(this.item.mobile).click();
        cy.get(this.item.smartphones).click();
        cy.get(this.item.allSmartphones).click();
    }
}