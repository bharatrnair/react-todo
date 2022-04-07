import {useState} from 'react'

const Todo = () => {
    const [userName,setUserName] = useState('');
    const [todoList,setTodoList] = useState([]);
    const loadData = () => {
        fetch(`https://192.168.1.48/${userName}`)
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