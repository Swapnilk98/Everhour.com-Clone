const mongoose=require("mongoose")

const TodoInprogressModel=mongoose.model("todoInprogress",mongoose.Schema({
   todoInprogress:String
}))

module.exports=TodoInprogressModel