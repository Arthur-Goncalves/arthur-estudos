var faker = require('faker')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {            
            name: `${firstName} ${lastName}`,
            cpf: '00000014141',
            email: faker.internet.email(firstName),
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

        return data
    }
}