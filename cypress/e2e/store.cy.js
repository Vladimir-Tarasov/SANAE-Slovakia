///<reference types="cypress" />

import { Basket } from './basket.view';
import { Cookies } from './cookies.view';
import { Dropdown } from './dropdown.view';
import { Header } from './header.view';
import { MainMenu } from './main-menu.view';
import { ModalContent } from './modal-content.view';
import { PrebasketSidebar } from './prebasketSidebar.view';
import { ProductList } from './product-list.view';
import { SearchContent } from './search-content.view';

describe('Datart cart testing', () => {
    const cookies = new Cookies();
    const mainMenu = new MainMenu();
    const dropdown = new Dropdown();
    const productList = new ProductList();
    const prebasketSidebar = new PrebasketSidebar();
    const modalContent = new ModalContent();
    const basket = new Basket();
    const header = new Header();
    const searchContent = new SearchContent();

    beforeEach(() => {
        cy.visit('https://www.nay.sk/');
        cookies.accept();
    });

    it('should add goods to cart', () => {
        mainMenu.selectMobile();
        cy.wait(5000);
        dropdown.selectExpensive();

        productList.addToCart(0);
        prebasketSidebar.close();
        productList.addToCart(1);
        prebasketSidebar.close();
        productList.addToCart(2);
        prebasketSidebar.checkoutCart();
        modalContent.accept();

        basket.checkProductCount(3)
            .remove()
            .checkProductCount(2);
    });

    it('should search particular brand', () => {
        header.enterBrand('samsung')
            .submit();
        searchContent.checkName('Samsung');
    });

    it('should check payment is not possible if basket is empty', () => {
        mainMenu.selectMobile();
        productList.addToCart(0);
        prebasketSidebar.checkoutCart();

        basket.checkContinueIsVisible()
            .remove()
            .checkContinueIsNotVisible();
    });
})