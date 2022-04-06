import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Middle from "./Components/Middle";
import End  from "./Components/last";

const App = () => {
    return (

        <div className="container">
        <Header title ="Todo" color ="red"/>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="counter" element={<Counter value={10} />} />
            <Route path ="middle" element={<Middle/>} />
            <Route path ="last"   element={<End/>} />
            </Routes>
        <Footer year ={2022}/>
        </div>
        )
    }


export default App;