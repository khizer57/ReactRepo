import './App.css';
import AppRouter from './config/router/router';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [dt, setData] = useState([]); 
  const getData = (id) => {
    const api = "https://api.covidtracking.com/v1/states/current.json";
    axios.get(api).then((res) => {
      console.log(res.data);
      const { data } = res;
      data.map((val) => {
        console.log(val.state);
      });
    });
  };
  useEffect(()=>{
    getData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
     <AppRouter/>
     <select className="form-select" aria-label="Default select example">
      <option defaultValue>Select</option>
      <option value="1">State</option>
      <option value="2">Positive</option>
      <option value="3">Negative</option>
    </select>
    <div className='covid'>
      <h2 className="state">{}</h2>
    </div>
     </header>
    </div>
  );
}

export default App;


// Switch replace by Routes
// compononent replace by element
// use history replace by usenavigate
