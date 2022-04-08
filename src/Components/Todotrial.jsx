import {useState} from 'react'

const Todotrial = () => {
    const [userName,setUserName] = useState('');
    const [todoList,setTodoList] = useState([]);
    const [list,setList] = useState([]);
    const loadData = () => {
        fetch(`http://192.168.48.1:8086/todos/${userName}`)
        .then(res => res.json())
        .then(data => {
            setTodoList(data.todos);
        }).catch(err =>{
            alert("Invalid user name");
        })
    }

    const addTodo =() =>{
        let data={
            user:userName,
            todos:[
                ...todoList,
                {text:list,status:true}
            ]
        }
        updateData(data)
    }

    const switchActive =(id)=>{
        const newList = todoList.map(todo => {
            if(todo._id === id){
                todo.status = !todo.status;
            }
            return todo;
        });
        let data ={
            user:userName,
            todos: newList
        }
        updateData(data);
    }

    const updateData = (data) =>{
        fetch(`http://192.168.48.1:8086/todos`,{
            method:'POST',
            headers:{ 
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
          }).then(res => res.json())
            .then(data => {
                setTodoList(data.todos);
            })
        }



        


  return (
    <div>
        <header>
            <input type="text" placeholder='UserName' value={userName} onChange={(e)=>setUserName(e.target.value)}
            />
            <button onClick={loadData}> 
            Submit
             </button>
        </header>
        <main>
            <div className="add-todo">
            <input type="text"
            value={list}
            onChange={(e)=>setList(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            </div>
            {todoList.map(todo =>(
            <div
            key={todo._id}
            className={todo.status ? "active" : "notActive"}
            onClick={()=>switchActive(todo._id)}
            >
                <p>{todo.text}</p>
            </div>
            ))}
        </main>
    </div>
  )
}

export default Todotrial