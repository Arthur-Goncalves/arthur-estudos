import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    it('Usuário deve se tornar um entregador um entregador', () => {

        var deliver = {
            name: 'Arthur Gonçalves',
            cpf: '00000014141',
            email: 'teste@teste.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '25960090',
                street: 'Rua Gonçalo de Castro',
                number: '20',
                details: 'Bloco 5, Ap 105',
                district: 'Alto',
                city_state: 'Teresópolis/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)


    })

    it('CPF incorreto', () => {

        var deliver = {
            name: 'Arthur Gonçalves',
            cpf: '000000141AA',
            email: 'teste@teste.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '25960090',
                street: 'Rua Gonçalo de Castro',
                number: '20',
                details: 'Bloco 5, Ap 105',
                district: 'Alto',
                city_state: 'Teresópolis/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
})