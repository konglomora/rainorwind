'use strict'

require('dotenv').config()
// replace the value below with the Telegram token you receive
// from @BotFather
const Token = process.env.TELEGRAM_TOKEN
// replace the value below with the OpenWeatherMap api_key
// you receive from their website
const ApiKey = process.env.API_KEY
// MongoDB database config
const dbURI = `mongodb+srv://telegram-weather-bot:${process.env.DB_PASS}@cluster0.anzbg.mongodb.net/test`
// mongodb+srv://telegram-weather-bot:<password>@cluster0.anzbg.mongodb.net/test
// Geocode api key
const GeoapiKey = process.env.GEOCODE

module.exports = { Token, ApiKey, dbURI, GeoapiKey }
