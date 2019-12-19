import React, { useState } from 'react'

function Todo({todo, index, completed, removeTodo}){
return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>{todo.text}
          <button onClick={e => {completed(index)}}>complete</button>
          <button onClick={e => {removeTodo(index)}}>X</button>
      </div>;
}


function FormAddTodo({addTodo}){
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value)  
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');

  }
  return (
    
      <form onSubmit={onSubmit}>
      <input type="text"  placeholder="Add todo..."
        value={value}
        onChange={onChange}
      />
      </form>
  )
}
function App(){

  const [todos, setTodos] = useState([
    {
      text: "aaa",
      isCompleted: false
    },
    {
      text: "bbb",
      isCompleted: false
    },
    {
      text: "ccc",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    
    // todos.push({text})
    // console.log(todos)
    // setTodos(todos);
    const newTodo = [...todos, {text}];
    setTodos(newTodo);
    console.log(newTodo)
  }
  const completed = index => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
  }
  const removeTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  return (
    <React.Fragment>
      <div className="App">
        <h3>{todos.map((todo,index) => (
          <Todo key={index} index={index} todo={todo} completed={completed} removeTodo={removeTodo}/>
          ))}</h3>
          <FormAddTodo addTodo={addTodo}/>
      </div>
    </React.Fragment>
  )
}
export default App;
