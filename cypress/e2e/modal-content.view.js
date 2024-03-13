export class ModalContent {
    button = {
        accept: 'div.modal-content .modal-footer button.btn-primary'
    };

    accept() {
        cy.get(this.button.accept).click();
    }
}