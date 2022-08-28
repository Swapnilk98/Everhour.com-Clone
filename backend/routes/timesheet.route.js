
const express=require("express");
const timeSheetModel = require("../model/timeSheet.model");




const timeController=express.Router();
timeController.post("/create",async (req,res)=>
{
    const {end,project,start,timeHour,title}=req.body
    
    const new_Time=new timeSheetModel({
        end,project,start,timeHour,title
    })
    await new_Time.save()

    res.send({"massage":"TimeSheet Created",new_Time})
}
)
timeController.get("/", async (req, res) => {
    // const {userId} = req.body
    const notes = await timeSheetModel.find({})
    res.send(notes)
 })

 timeController.patch("/:timeId/edit", async (req, res) => {
    const {timeId} = req.params;
    
    const client = await timeSheetModel.findOne({_id : timeId})
//    console.log(user_Id)
   
       const new_note = await timeSheetModel.findOneAndUpdate({_id : timeId}, req.body, {new:true})
       return res.send({"message" : "successfully updated", new_note})
   
})

timeController.delete("/:timeId/delete", async (req, res) => {
   const {timeId} = req.params;
//    const {userId} = req.body;
   const todo = await timeSheetModel.findOne({_id : timeId})
  
   
      await timeSheetModel.findOneAndDelete({_id : timeId})
      return res.send({"message" : "successfully deleted"})
  
})



module.exports = timeController