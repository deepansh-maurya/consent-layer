import express from "express"
const app = express()



app.get("/",(req,res)=>{
    console.log("serving api ");
    
})


app.listen("5000",()=>{
    console.log("server is running ");
    
})