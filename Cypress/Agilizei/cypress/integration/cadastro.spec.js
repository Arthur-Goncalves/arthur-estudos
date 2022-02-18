///  <reference types="cypress"   />

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        // baseUrl + Register.html
        cy.visit('Register.html');
        
        // type
        cy.get('input[placeholder="First Name"]').type('Arthur');
        cy.get('input[ng-model^=Last]').type('Santos');
        cy.get('input[ng-model^=Email]').type('alunoteste@teste.com');
        cy.get('input[ng-model^=Phone]').type('1234567890');

    });
});

//elementos
//  input[placeholder='First Name']
//  input[ng-model='LastName']
//  input[contains(@type,'email')]
//  input[@type='tel']