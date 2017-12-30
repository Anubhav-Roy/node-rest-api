'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var product = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the product'
  },
  created: {
    type: Date,
    default: Date.now
  },
  id: {
	  type: Number
  },
  description: {
	  type: String,
	  required: 'Kindly enter the description of the product'
  },
  price : {
	  type: Number ,
	  required: 'Kindly enter the price of the product'	  
  },
  category_id : {
	  type: Number ,
	  required: 'Kindly enter the category_id of the product'	  
  }
});

module.exports = mongoose.model('Product', product);