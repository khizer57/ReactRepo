import './App.css';
import AppRouter from './config/router/router';
import axios from 'axios';
import { useEffect } from 'react';

function App() { 
  const getData = (id) => {
    const api = "https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2";
    axios.get(api).then((res) => {
      console.log(res.data);
      const { data } = res;
    });
  };
  useEffect(()=>{
    getData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
     <AppRouter/>
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
