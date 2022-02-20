const Router = require("express")
const Food = require("../models/Food")
const User = require("../models/User")
const router = new Router()

router.post('/',
	async (req, res) => {
		try {
			const { userId, id } = req.body
			const user = await User.findOne({ _id: userId })
			const food = await Food.findOne({ _id: id })

			const basket = user.basket.push(food)

			await user.updateOne(
				{ _id: userId },
				{
					$set: {
						basket: basket,
					}
				}
			)

			await user.save()

			res.send(user)

		} catch (e) {
			console.log(e)
			res.send({ message: "Не удалось добавить продукт в корзину" })
		}
	}
)

router.put('/',
	async (req, res) => {
		try {
			const { userId, id } = req.body
			const food = await Food.findOne({ _id: id })
			const user = await User.updateOne({ _id: userId },
				{
					$pull:{
						basket: food
					}
				}
			)

			//await user.save()

			res.send(user)

		} catch (e) {
			console.log(e)
			res.send({ message: "Не удалось удалить продукт из корзину" })
		}
	}
)

module.exports = router