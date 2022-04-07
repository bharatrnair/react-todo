import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Middle from "./Components/Middle";
import End  from "./Components/last";
import Layout from "./Components/Layout";
import Todo from "./Components/Todo";

const App = () => {
    return (
        <Routes>
            <Route path="" element={<Layout />} >
                <Route path="" element={<Home />} />
                <Route path="counter" element={<Counter value={10} />} />
                <Route path ="middle" element={<Middle/>} />
                <Route path ="last"   element={<End/>} />
                <Route path ="todo"   element={<Todo/>} />
            </Route>
            </Routes>
        )
    }


export default App;