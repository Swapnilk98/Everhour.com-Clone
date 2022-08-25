const {Router}=require("express")

const todoInprogressRouter=Router()

const TodoInprogressModel=require("../Model/todoInprogress")


todoInprogressRouter.get("/",async(req,res)=>{
const Todos=await TodoInprogressModel.find()
  res.send(Todos);
})

todoInprogressRouter.post("/create",async(req,res)=>{
    const {todoInprogress}=req.body

    let NewTodo=new TodoInprogressModel({
        todoInprogress
    })
   await NewTodo.save()
    res.send({messege:"Todo Saved",NewTodo})
})

todoInprogressRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const deleteTodo=await TodoInprogressModel.deleteOne({_id:id})
    res.send({messege:"Todo Deleted",deleteTodo})
})


module.exports=todoInprogressRouter