import express ,{urlencoded} from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./Router/UserRouter.js"
const app = express()
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/user",userRouter)

export default app;
