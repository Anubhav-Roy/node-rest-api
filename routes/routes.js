'use strict';
module.exports = function(app) {
  var api = require('../controllers/controller');

  // api Routes
  app.route('/products')
    .get(api.list_all_products)
    .post(api.create_a_product);


  app.route('/products/:productId')
    .get(api.read_a_product)
    .put(api.update_a_product)
    .delete(api.delete_a_product);
};
