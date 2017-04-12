const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
	name: String,
	des: String
})

const Food = module.exports = mongoose.model('Food', foodSchema)