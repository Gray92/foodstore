const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const foodRouter = require("./routes/food.routes")
const basketRouter = require("./routes/basket.routes")
const corsMiddleware = require('./middleware/cors.middleware')
const fileUpload = require("express-fileupload")


const app = express()

const PORT = process.env.PORT || config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api/auth', authRouter)
app.use('/api/food', foodRouter)
app.use('/api/basket', basketRouter)

const start = async () => {
	try {
		await mongoose.connect(config.get('dbUrl'))
		console.log('База подключена успешно.')
		app.listen(PORT, () => {
			console.log(`Сервер запустился, порт: ${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()

