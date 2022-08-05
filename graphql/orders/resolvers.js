const ordersModel = require('./model');

module.exports = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    }
  }
};