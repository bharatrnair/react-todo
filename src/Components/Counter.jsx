import {useState} from "react"
import {Link ,useNavigate} from "react-router-dom"
import image from "./../IMG_7253.JPG"

const Counter =({value})=>{
   const navigate =useNavigate();
const [count,setCount] = useState(value);
return(
   <div style={{
      backgroundImage: `url(${image})`
   }}>
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
      <Button onClick={()=>{
         navigate("/")

      }}> Back</Button>
      
   </div>
)
   }
   export default Counter;