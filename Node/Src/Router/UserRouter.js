import express from "express"
import { deleteoneController, findoneContrller, getandupdateuser, getdata, savecontroller } from "../Controller/UserController.js"

const userRouter = express.Router()

userRouter.post("/create",savecontroller)
userRouter.get("/getall",getdata)
userRouter.patch("/updateUser/:id",getandupdateuser)
userRouter.get("/get/:id",findoneContrller)
userRouter.delete("/delete/:id",deleteoneController)



export default userRouter;