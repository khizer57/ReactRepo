import { useState } from 'react';
import './App.css';

function App() {
const [inpValue,setInpValue] = useState('')
const [list, setList] = useState([])

const addItem = ()=>{
  let updatedarr = [...list]
  updatedarr.push(inpValue)

  setList(updatedarr)
  setInpValue('')

  console.log(list)

}


  return (
    <div className="App">
      <h1>To Do App</h1>
      <h3>{inpValue}</h3>
      <input value={inpValue} onChange={(e)=>setInpValue(e.target.value)} placeholder="Write Something"></input>

  <button onClick={addItem}>Add</button>
  <button >Delete All</button>
<ol>
  {list.map((e,i)=> <li key={i}>{e}</li>)}
</ol>


      {/* <ul>
      {val().map((item,index)=>{
        return <li key={index}>{item} index = {index}</li>
      })}
      </ul> */}
    </div>
  );
}

export default App;
