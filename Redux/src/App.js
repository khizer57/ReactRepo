import './App.css';
import { useSelector} from "react-redux"

function App() {
  const state = useSelector((e) => e);
  console.log(state)
  return (
    <div className="App">
      <header className="App-header">
      <h1>{state.question}</h1>
    </header>
    </div>
  );
}

export default App;
