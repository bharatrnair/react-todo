const TodoApp = () =>{
    return (
        <div className="todo">
        <p>Username</p>
        <input type="text" placeholder="Username" />
        <ul>
        <li>
            <p>Status</p>;
            <input type="checkbox" />;
            <p>Text</p>
            <input type="text" />
        
        </li>
        </ul>
        </div>
    );
};
export default TodoApp;