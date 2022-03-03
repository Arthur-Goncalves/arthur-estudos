import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((massa) => {
    //         this.deliver = massa
    //     })
    // });

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

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Email incorreto', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Campos Obrigatórios', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]

        before(function () {
            SignupPage.go()
            SignupPage.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})