const mongoose=require("mongoose")

const TodoModel=mongoose.model("todo",mongoose.Schema({
   todo:String
}))

module.exports=TodoModel