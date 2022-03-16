/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {

    // HOOK -> São trechos que devem ser executados antes ou depois dos testes
    beforeEach(() => {
        
        // Arrange
        cy.login()
        cy.visit('/')
    });

    it('Cadastro de novo artigo com sucesso', () => {

        // acesso ao form
        articles.acessarOFormulario()

        // preencher o formulário
        articles.preencherFormulario()
        
        // submeter o formuário
        articles.submeterFormulario()

        // verificar se o artigo foi criado 
        articles.verificarArtigoCriado()

    });
});