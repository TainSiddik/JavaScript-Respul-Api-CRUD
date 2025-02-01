import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import "dotenv/config"
import db from "./config/database/Connection.js"
import Products from "./routers/Products.js"

const app = express()
const port = process.env.APP_PORT

const dbSync = async () => {
    try {
        await db.authenticate()
        console.log("Database connected successfully")
        // await db.sync()
    } catch (error) {
        console.log(`Database connection has failed`)
    }
}
dbSync()

app.use(express.json)
app.use(fileUpload())
app.use(cors())

app.use(Products)

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
})