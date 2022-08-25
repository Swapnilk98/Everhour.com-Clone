const {Router}=require("express")

const todoRouter=Router()

const TodoModel=require("../Model/todo.model")


todoRouter.get("/",async(req,res)=>{
const Todos=await TodoModel.find()
  res.send(Todos);
})

todoRouter.post("/create",async(req,res)=>{
    console.log("AAAAAA",req.body)
    const {todo}=req.body

    let NewTodo=new TodoModel({
        todo
    })
   await NewTodo.save()
    res.send({messege:"Todo Saved",NewTodo})
})

todoRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const deleteTodo=await TodoModel.deleteOne({_id:id})
    res.send({messege:"Todo Deleted",deleteTodo})
})


module.exports=todoRouter