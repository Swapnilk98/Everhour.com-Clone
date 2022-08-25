
const express=require("express");
const clientModel = require("../model/client.route");



const clientController=express.Router();
clientController.post("/create",async (req,res)=>
{
    const {client_Name,selectProject,email,add_Bussiness}=req.body
    
    const new_Client=new clientModel({
        client_Name,selectProject,email,add_Bussiness
    })
    await new_Client.save()

    res.send({"massage":"Note Created",new_Client})
}
)
clientController.get("/", async (req, res) => {
    // const {userId} = req.body
    const notes = await clientModel.find({})
    res.send(notes)
 })

 clientController.patch("/:clientId/edit", async (req, res) => {
    const {clientId} = req.params;
    
    const client = await clientModel.findOne({_id : clientId})
//    console.log(user_Id)
   
       const new_note = await clientModel.findOneAndUpdate({_id : clientId}, req.body, {new:true})
       return res.send({"message" : "successfully updated", new_note})
   
})

clientController.delete("/:clientId/delete", async (req, res) => {
   const {clientId} = req.params;
//    const {userId} = req.body;
   const todo = await clientModel.findOne({_id : clientId})
  
   
      await clientModel.findOneAndDelete({_id : clientId})
      return res.send({"message" : "successfully deleted"})
  
})



module.exports = clientController