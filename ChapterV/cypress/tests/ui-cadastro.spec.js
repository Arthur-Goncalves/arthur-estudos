/// <reference types="cypress" />


describe('Cadastro', () => {
    it('Cadastro com sucesso', () => {

        cy.intercept({
            // https://api.realworld.io/api/users
            // POST
            method: 'POST',
            path: '/api/users'

        }, {

            statusCode: 200,
            fixture: 'cadastro-com-sucesso'

        }).as('postUsers')

        cy.visit('register');
        cy.get('input[placeholder="Username"]').type('ChapterVArth_')
        cy.get('[placeholder="Email"]').type('chapterVarth_@mail.com')
        cy.get('[placeholder="Password"]').type('123456')

        cy.get('button.btn-primary').click();

        cy.contains('No articles are here... yet.').should('be.visible')

    });

    it('Cadastro com usuário já existente', () => {

        cy.visit('register');
        cy.get('input[placeholder="Username"]').type('ChapterV')
        cy.get('[placeholder="Email"]').type('chapterVarth__@mail.com')
        cy.get('[placeholder="Password"]').type('123456')

        cy.get('button.btn-primary').click();

        cy.contains('username has already been taken').should('be.visible')

        cy.intercept({

            method: 'POST',
            path: '/api/users'

        }, {

            statusCode: 422,
            fixture: 'cadastro-usuario-existente'

        }).as('postUsers')
    });

    it('Cadastro com e-mail já existente', () => {

        cy.visit('register');
        cy.get('input[placeholder="Username"]').type('ChapterV98521')
        cy.get('[placeholder="Email"]').type('chapterVarth_@mail.com')
        cy.get('[placeholder="Password"]').type('123456')

        cy.get('button.btn-primary').click();

        cy.contains('email has already been taken').should('be.visible')

        cy.intercept({

            method: 'POST',
            path: '/api/users'

        }, {

            statusCode: 422,
            fixture: 'cadastro-email-existente'

        }).as('postUsers')
    });

});