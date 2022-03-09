/// <reference types="cypress" />

describe('Cadastro', () => {
    it('Cadastro com sucesso', () => {

    cy.visit('register');
    cy.get('input[placeholder="Username"]').type('ChapterVArth_')
    cy.get('[placeholder="Email"]').type('chapterVarth_@mail.com')
    cy.get('[placeholder="Password"]').type('123456')

    cy.get('button.btn-primary').click();

    cy.contains('No articles are here... yet.').should('be.visible')

        
    });
});