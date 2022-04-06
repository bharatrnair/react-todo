import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";

const App = () => {
    return (

        <div className="container">
        <Header title ="Todo" color ="red"/>
        <Counter value={0}/>
        <Footer year ={2022}/>
        </div>
        )
    }


export default App;