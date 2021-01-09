const express=require("express")

const bodyParser=require("body-parser")
const app= express();
const mongoose=require("mongoose")
require("dotenv/config")

app.use(bodyParser.json())
const postsRoute=require("./routes/posts.js")


app.use("/posts",postsRoute)

app.get('/',(req,res)=>{
    res.send("We are on home")
})



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
    console.log("Connected to db")
})
//Listening
app.listen(3000,()=>{
    console.log("Listening")
})