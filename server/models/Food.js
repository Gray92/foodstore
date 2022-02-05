const {Schema, model} = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


const Food = new Schema({
	type: {type: String, required: true},
	name: {type: String, required: true, unique: true},
	img: {type: String, required: true},
	desqription: {type: String, required: true},
	price: {type: Number, required: true},
})

Food.plugin(mongoosePaginate)

module.exports = model('Food', Food)