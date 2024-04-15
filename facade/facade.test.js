const Facade = require('./facade');

test('Test getAllData method of Facade', () => {

const facade = new Facade();

const data = facade.getAllData();


expect(data).toEqual({
    users: ['User1', 'User2', 'User3'],
    products: ['Product1', 'Product2', 'Product3'],
    orders: ['Order1', 'Order2', 'Order3']
});

});