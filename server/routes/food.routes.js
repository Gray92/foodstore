const Router = require("express")
const Food = require("../models/Food")
const uuid = require('uuid')

const config = require('config')

const router = new Router()

router.post('/',
	async (req, res) => {
		try {
			const { name, type, desqription, price } = req.body
			const { img } = req.files

			const candidate = await Food.findOne({ name })
			if (candidate) {
				return res.status(400).json({ message: `Продукт с таким именем ${name} уже существует.` })
			}

			let fileName = uuid.v4() + ".jpg"
			img.mv(config.get("staticPath") + "\\" + fileName)

			const food = new Food({ name, type, desqription, price, img: fileName })

			await food.save()

			return res.json({ message: `Продукт ${name} успешно создан и добавлен.` })

		} catch (e) {
			console.log(e)
			res.send({ message: "Не удалось создать продукт" })
		}

	}
)


router.get('/',
	async (req, res) => {
		try {
			let { type } = req.query
			const { limit, page } = req.query
			
			!type ? type = {} : type = { type }

			Food.paginate(type, { page, limit })
			.then(food => {
					res.json(food)
				})
			

		} catch (e) {
			console.log(e)
			res.send({ message: "Не удалось загрузить продукты с сервера" })
		}
	}
)


router.put('/',
	async (req, res) => {
		try {
			const { id } = req.query
			const { name, type, desqription, price } = req.body
			const { img } = req.files

			await Food.updateOne(
				{ _id: id},
				{
					$set: {
						name: name,
						type: type,
						foodAva: img,
						desqription: desqription,
						price: price
					}
				}
			)

			

			return res.json({ message: 'Продукт успешно изменен.' })
		} catch (e) {
			console.log(e)
			res.send({ message: "Не удалось изменить продукт" })
		}
	}
)


router.delete('/',
	async (req, res) => {
		try {
			const { id } = req.query

			const food = await Food.find({ _id: id })
			
			await Food.findOneAndDelete({ _id: id })
			
			

			return res.json({ message: 'Продукт успешно удален.' })
		} catch (e) {
			console.log(e)
			res.send({ message: "Не удалось удалить продукт" })
		}

	}
)


module.exports = router