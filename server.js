require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on("error",(error) => console.error(error))
db.once("open", () => console.log("Connected to database"))


app.use(express.json())


const productsRouter = require("./routers/products")
app.use("/products",productsRouter)

app.listen(PORT, () => console.log("Server started"));
