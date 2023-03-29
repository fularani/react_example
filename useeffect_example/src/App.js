import {useState} from "react"
import './App.css';
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>setCounter(c=>!c)}>
        {
          counter? 'Hide':'Show'
        }
        {' '}Counter
        </button>
        {counter && <Counter/>}
      </header>
    </div>
  );
}

export default App;
