import express from 'express'
import { todoService } from '#services/todosService'; 

export const todosRouter = express.Router()

todosRouter.get('/', (req, res) => {
   console.log('query params', req.query);

   let data = todoService.todos
  
   const limit = req.query.limit
   const page = req.query.page


   res.status(200).json({ 
      message: 'success',
      data
    });
});

todosRouter.get('/:id', (req, res) => {
   console.log('params = ', req.params);

   const todo = todoService.findTodo(Number(req.params.id))

  if(todo){
     res.status(200).json({ 
      message: 'success',
      data: todo
    });
  } else {
    res.status(404).json({ 
      message: 'User not found',
    });
  }
});

todosRouter.post('/', (req, res) => {
    const todo = req.body
   
    const data = todoService.createTodo(todo)

    if(data){
       res.json({message: 'Todo added to list'})}
    }
 )

 todosRouter.put('/:id', (req, res) => {
   const todoId = req.params.id
    const todo = req.body


    const todoIndex = todoService.todos.findIndex(todo => todo.id === Number(todoId))

    todoService.todos.splice(todoIndex, 1, todo)

    res.json({
      message: 'Todo changes',
      data: todoService.todos
   })}
 )

  todosRouter.delete('/:id', (req, res) => {
    const todoId = req.params.id

    const todos = todoService.todos.filter(todo => todo.id !== Number(todoId))

    res.json({
      message: 'Todo removed',
      data: {}
   })}
 )