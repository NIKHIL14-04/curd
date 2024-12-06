import { deleteone, findAndOne, findAndUpdate, getData, save } from "../Service/UserService.js"

export const savecontroller =async(req,res)=>{
 try {
    const {name,age,email} = req.body
    if(!name || !age || !email){
        return res.status(400).json({
            message:"all filed are required..!",
            status:400,
        })
    }else{
        var data ={
            name:name,
            email:email,
            age:age
        }
        let my = await save(data)
        return res.status(200).json({
            message:"create sucessfully",
            status:200,
            data:my
        })
    }
 } catch (error) {
    console.log(error.message)
    return res.status(200).json({
       message:"something went worng..!",
       status:500 
    })
 }
}


export const getdata =async(req,res)=>{
    try {
       let res1 = await getData()
       return res.status(200).json({
        message:"get all",
        data  :res1
       })
    } catch (error) {
        console.log(error.message)
        return res.status(200).json({
           message:"something went worng..!",
           status:500 
        })
    }
}


export const getandupdateuser =async(req,res)=>{
try {
    const {id} = req.params;
    const data = req.body

    let user = await findAndUpdate(id,data)
    if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({
        message:"User Updated..!",
        status:200,
        data:user
      })
} catch (error) {
    console.error("Error updating user:", error.message);

    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}


export const findoneContrller =async(req,res)=>{
    try {
        const {id} = req.params;    
        let user = await findAndOne(id)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
          return res.status(200).json({
            message:"User find",
            status:200,
            data:user
          })
    } catch (error) {
        console.error("Error updating user:", error.message);
    
        res.status(500).json({ message: "Internal Server Error", error: error.message });
      }
    }
    


    export const deleteoneController =async(req,res)=>{
        try {
            const {id} = req.params;    
            let user = await deleteone(id)
            if (!user) {
                return res.status(404).json({ message: "User not found" });
              }
              return res.status(200).json({
                message:"User deleted",
                status:200,
              })
        } catch (error) {
            console.error("Error updating user:", error.message);
        
            res.status(500).json({ message: "Internal Server Error", error: error.message });
          }
        }