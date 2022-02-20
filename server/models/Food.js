const {Schema, model} = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


const Food = new Schema({
	type: {type: String, },
	name: {type: String, unique: true},
	img: {type: String },
	desqription: {type: String, },
	price: {type: Number, },
})

Food.plugin(mongoosePaginate)

module.exports = model('Food', Food)