const express = require('express')
const cors = require('cors')
const DisplayData = require("./Routes/DisplayData")
 const OrderData = require("./Routes/OrderData");
const userRoutes = require("./Routes/CreateUser");
const MyorderData  = require("./Routes/MyorderData")
const app  = express();
const port = 5000;
const mongoDB = require("./db");

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin , X-Requested-With Content-Type, Accept"
//     )
//     next();
// })
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/',userRoutes)
app.use('/api/',DisplayData)
app.use('/api/',OrderData)
app.use('/api/',MyorderData)


mongoDB();
app.get('/',(req,res)=>{
    res.send("Hello")

})

app.listen(port,()=>{
    console.log(`server running on" ${port}`)
})
