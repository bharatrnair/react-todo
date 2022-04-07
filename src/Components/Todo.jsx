import {useState} from 'react'

const Todo = () => {
    const [userName,setUserName] = useState('');
    const [todoList,setTodoList] = useState([]);
    const loadData = () => {
        fetch(`http://192.168.1.48:8086/todos/${userName}`)
        .then(res => res.json())
        .then(data => {
            setTodoList(data.todos);
        }).catch(err =>{
            alert("Invalid user name");
        });
    }
  return (
    <div>
        <header>
            <input type="text" placeholder='user name' value={userName} onChange={(e)=>setUserName(e.target.value)}
            />
            <button onClick={loadData}>
                Submit
                </button>
        </header>
        <main>
            <div className="add-todo">
                <input type="text"
                value={todo}
                onChange={(e)=>setTodoList(e.target.value)}
                 />
                 <button onClick={addTodo}>Add</button>
            </div>
            {todoList.map(todo => (
                <div key={todo.id} className={todo.status?"active":""}>
                    <p>{todo.text}</p>
            </div>
            ))}
        </main>
    </div>
  )
}

export default Todo;