const express=require("express")


const app= express();



//ROUTES
app.get('/',(req,res)=>{
    res.send("We are on home")
})



//Listening
app.listen(3000,()=>{
    console.log("Listening")
})