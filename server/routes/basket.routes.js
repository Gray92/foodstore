const Router = require("express")
const Food = require("../models/Food")
const User = require("../models/User")
const router = new Router()

router.post('/:id',
	async (req, res) => {
		try {
			const { userId } = req.query
			const user = await User.findOne({ userId })
			const food = await Food.findOne({ id: req.body.id })

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

router.delete('/:id',
	async (req, res) => {
		try {
			const { userId } = req.query
			const user = await User.findOne({ userId })
			const food = await Food.findOne({ id: req.body.id })

			const basket = user.basket.filter(f => f !== food)

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
			res.send({ message: "Не удалось удалить продукт из корзину" })
		}
	}
)

module.exports = router