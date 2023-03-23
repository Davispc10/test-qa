var faker = require('faker/locale/pt_BR');

exports.products = {
  backpack: 'Backpack',
  bike: 'Bike Light',
  tShirtBolt: 'Bolt T-Shirt',
  jacket: 'Fleece Jacket',
  onesie: 'Onesie',
  tShirtRed: 'T-Shirt (Red)'
}

exports.dadosUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  postalCode: faker.address.zipCode()
}