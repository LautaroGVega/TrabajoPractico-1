const Users = require('./users');
const Products = require('./products');
const Orders = require('./orders');

class Facade {

constructor() {
    this.users = new Users();
    this.products = new Products();
    this.orders = new Orders();

}


getAllData() {
    const users = this.users.getUsers();
    const products = this.products.getProducts();
    const orders = this.orders.getOrders();
    return { users, products, orders };
}



}

module.exports = Facade;