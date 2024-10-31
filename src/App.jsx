import './App.css'
import CounterDisplay from "./components/CounterDisplay.jsx";
import CounterControls from "./components/CounterControls.jsx";



function App() {
return (
    <>
    <div className="App">
        <h1>Лічильник з Context</h1>
        <CounterDisplay />
        <CounterControls />
    </div>
       </>
);
}

export default App
