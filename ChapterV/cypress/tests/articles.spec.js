/// <reference types="cypress" />

describe('Articles', () => {

    // HOOK -> São trechos que devem ser executados antes ou depois dos testes
    beforeEach(() => {
        
        cy.login()
        cy.visit('/')
    });

    it('Cadastro de novo artigo com sucesso', () => {

        // Fluxo de login
        // cy.visit('login')
        // cy.get('[placeholder="Email"]').type('chaptervart@mail.com')
        // cy.get('[placeholder="Password"]').type('123456')
        // cy.contains('button', 'Sign in').click()

        const articleName = 'Artigo de testes' + new Date().getTime()

        // Fluxo de criação do artigo
        cy.get('[href*="#/editor/"]').click()
        cy.get('[ng-model$=title]').type(articleName) // Atributo que termine "$" com a palavra title
        cy.get('[ng-model$=description]').type('Artigos de testes Curso Agilizei')
        cy.get('[ng-model$=body]').type('Corpo do texto do artigo que está sendo criado no curso Agilizei')
        cy.get('[ng-model$=tagField]').type('CypressAgilizei')

        cy.contains('button', 'Publish Article').click()
        cy.contains(articleName).should('be.visible')
        cy.get('h1').should('have.text', articleName)


    });
});