const mongoose=require("mongoose")

const TodoCompModel=mongoose.model("todoComp",mongoose.Schema({
   todoCompleted:String
}))

module.exports=TodoCompModel