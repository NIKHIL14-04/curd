import UserModel from "../Model/UserModel.js"

export const save =async(data)=>{
try {
const user = new UserModel(data)
const my  = await user.save()
return my;
} catch (error) {
   throw error 
}
}



export const getData =async()=>{
   try {
     let getuser = await UserModel.find()
      return getuser
   } catch (error) {
      throw error
   }
}


export const findAndUpdate =async(id,data)=>{
   console.log(id)
   console.log(data)
   try {
      let user = await UserModel.findByIdAndUpdate(id,data,{new:true})
      if(!user){
         throw new Error("user not found..!")
      }
      return user
      
   } catch (error) {
      throw error
   }
} 




export const findAndOne =async(id)=>{
   console.log(id)
   try {
      let user = await UserModel.findById(id)
      if(!user){
         throw new Error("user not found..!")
      }
      return user
      
   } catch (error) {
      throw error
   }
} 

export const deleteone =async(id)=>{
   console.log(id)
   try {
      let user = await UserModel.deleteOne({id:id})
      if(!user){
         throw new Error("user not found..!")
      }
      return user
      
   } catch (error) {
      throw error
   }
} 