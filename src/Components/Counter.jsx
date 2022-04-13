import {useState} from "react"
import {Link ,useNavigate} from "react-router-dom"
import image from "./../IMG_7253.JPG"
import {useDispatch, useSelector} from "react-redux"

const Counter =({value})=>{
   const navigate =useNavigate();
   const count = useSelector((state)=>state.counter);
   const dispatch = useDispatch();
return(
   <div style={{
      backgroundImage: `url(${image})`
   }}>
      <button
      onClick ={()=>{
          dispatch({type:"INCREMENT"});
      }}
      > + </button>
   <div>{count}</div>
      <button
      onClick={()=>{
         dispatch({type:"DECREMENT"});
      }}> - </button>
      <br />
      <button onClick={()=>{
         navigate("/")

      }}> Back</button>
      
   </div>
)
   }
   export default Counter;