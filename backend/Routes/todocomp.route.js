const {Router}=require("express")

const todoCompRouter=Router()

const TodoCompModel=require("../Model/todocomp.model")


todoCompRouter.get("/",async(req,res)=>{
const Todos=await TodoCompModel.find()
  res.send(Todos);
})

todoCompRouter.post("/create",async(req,res)=>{
    const {todoCompleted}=req.body

    let NewTodo=new TodoCompModel({
        todoCompleted
    })
   await NewTodo.save()
    res.send({messege:"Todo Saved",NewTodo})
})

todoCompRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const deleteTodo=await TodoCompModel.deleteOne({_id:id})
    res.send({messege:"Todo Deleted",deleteTodo})
})


module.exports=todoCompRouter