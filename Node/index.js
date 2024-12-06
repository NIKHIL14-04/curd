import dotenv from "dotenv"
import connectionwithdb from "./Src/Db/Connection.js"
import app from "../Node/Src/App.js"
dotenv.config({path:'./.env'})


connectionwithdb()
.then((res)=>{
 app.listen(process.env.PORT_ADDRESS,()=>{
    console.log(`server is runing at ${process.env.PORT_ADDRESS}`)
 })
})
.catch((error)=>{
    console.log(`mongoose erro from `,error.message)
})