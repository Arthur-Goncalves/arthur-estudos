const el = require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {

    // acesso ao form
    acessarOFormulario() {
        cy.get(el.linkNovoArtigo).click()
    }

    // preencher o formulário
    preencherFormulario() {
        cy.get(el.inputTitle).type(articleName) // Atributo que termine "$" com a palavra title
        cy.get(el.inputDescription).type('Artigos de testes Curso Agilizei')
        cy.get(el.inputBody).type('Corpo do texto do artigo que está sendo criado no curso Agilizei')
        cy.get(el.inputTags).type('CypressAgilizei')
    }

    // submeter o formuário
    submeterFormulario() {
        cy.contains('button', 'Publish Article').click()
    }

    // verificar se o artigo foi criado 
    verificarArtigoCriado() {
        cy.contains(articleName).should('be.visible')
        cy.get('h1').should('have.text', articleName)
    }


}

export default new Articles()