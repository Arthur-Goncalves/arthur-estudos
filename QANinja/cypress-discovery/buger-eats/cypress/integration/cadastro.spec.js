import signup from '../pages/SignupPage'

describe('Cadastro', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((massa) => {
            this.deliver = massa
        })
    });

    // Como criar ganchos no cypress
    // before(() => {
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // });

    // beforeEach(() => {
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    // });

    // after(() => {
    //     cy.log('Tudo aqui é executado uma única DEPOIS de TODOS os casos de testes')
    // });

    // afterEach(() => {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')        
    // });


    it('Usuário deve se tornar um entregador', function () {
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function () {
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
})