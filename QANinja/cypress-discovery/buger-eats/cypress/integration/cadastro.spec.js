

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Arthur Gonçalves',
            cpf: '00000014141',
            email: 'teste@teste.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '25960090',
                rua: 'Rua Gonçalo de Castro',
                numero: '20',
                complemento: 'Bloco 5, Ap 105',
                bairro: 'Alto',
                cidade_uf: 'Teresópolis/RJ'
            },
            metodo_entrega: 'Moto'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

      

    });
    
});