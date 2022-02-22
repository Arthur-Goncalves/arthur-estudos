///  <reference types="cypress"   />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        // baseUrl + Register.html
        cy.visit('Register.html');
        
        // type
        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model^=Last]').type(chance.last());
        cy.get('input[ng-model^=Email]').type(chance.email());
        cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted: false }));

        // check -> radio's e checkboxes
        cy.get('input[value=Male]').check();
        cy.get('input[type=checkbox]').check('Cricket');
        cy.get('input[type=checkbox]').check('Hockey');

        // select -> select & select2 (combos)
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Select Country');
        cy.get('select#country').select('Australia', { force: true });
        cy.get('select#yearbox').select('1992');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('21');
        cy.get('input#firstpassword').type('Agilizei@2022');
        cy.get('input#secondpassword').type('Agilizei@2022');

        // attachFile -> Input file
        cy.get('input#imagesrc').attachFile('Capture.PNG');
       
        // Click
        cy.get('button#submitbtn').click();
        
    });
});

//elementos
//  input[placeholder="First Name"]
//  input[ng-model^=Last]
//  input[ng-model^=Email]
//  input[ng-model^=Phone]

//  input[value=Male]
//  input[type=checkbox]
//  select#Skills
//  select#countries
//  select#country
//  select#yearbox
//  select[ng-model^=month]
//  select#daybox
//  input#firstpassword
//  input#secondpassword