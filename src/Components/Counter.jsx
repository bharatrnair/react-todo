import {useState} from "react"
import {Link} from "react-router-dom"

const Counter =({value})=>{
const [count,setCount] = useState(value);
return(
   <div>
      <button
      onClick ={()=>{
         setCount(count+1)
      }}
      > + </button>
   <div>{count}</div>
      <button
      onClick={()=>{
         setCount(count-1)
      }}> - </button>
      <br />
      <Link to="/">Back</Link>
   </div>
)
   }
   export default Counter;