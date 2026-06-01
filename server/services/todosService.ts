let todos = [
   {
      id:1,
      text: 'Помыть посуду',
      done: false
   },
      {
      id:2,
      text: 'Сделать домашку',
      done: true
   }
]

function findTodo(id: number){
      const todoId = id

      const todo = todos.find(user => user.id === Number(todoId))

      return todo
}

function createTodo(todo: {id: number, text: string, done: boolean}){
    todo.id = Date.now()

    todos.push(todo)

    return true
}

export const todoService = {
    findTodo,
    createTodo,
    todos
}



