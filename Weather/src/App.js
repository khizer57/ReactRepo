import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';




function App() {
  const datafromRedux = useSelector((e)=>e)
  const dispatch = useDispatch();
    const update = () => {
      let obj = {
        userName: 'Ali',
        age: 55,
      }
      
    }
    const apidata() => {
      (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
          dispatch({
            type: 'DATAFROMAPI',
            apDATA: json,
          })
      };
    };
    useEffect(()=> {dispatch(apidata())});
    return (
      <>
      <h1>{datafromRedux.name}</h1> 
      <button onClick={update}>UPDATE</button>
      </>
    )
  };
  


  
export default App;