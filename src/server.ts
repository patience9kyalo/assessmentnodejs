import express, { json } from "express"
import productRouter from "./Routes/productRoutes"


const app = express()

//middleware
app.use(json())

app.use("/product", productRouter)


//port
app.listen(3000,()=>{
    console.log('Server running...')
})