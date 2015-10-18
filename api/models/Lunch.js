var mongoose = require('mongoose');

var LunchSchema = mongoose.Schema({
	name: String,
  	location: String,
	type: String
});

module.exports = mongoose.model('Lunch', LunchSchema);