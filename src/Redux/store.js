const redux = require("redux");
const {createStore, combineReducers} = redux;



const todo =(state =[],action)=>{
    switch (action.type){
        case "SET_TODO":
           return action.todo;
        default:
            return state;
    }
};

const counter =(state = 0,action)=>{
    switch (action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

const form =(key,value)=>{
    switch (action.type){
        case "SET_FORM":
            return 

const reducer = combineReducers({
    todo,
    counter,
});

const store = createStore(
    reducer,
    {
        todo: [],
        counter: 0,
    },

);

export default store;