import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import './App.css'



const Url='https://autovaga-bfc1c-default-rtdb.firebaseio.com/funcionario.json'

function App() {
  const [data, dispatch] = useReducer({})
  
  useEffect(() =>{
    dispatch({type:'REQUEST'})
    axios
    .get(Url)
    .then(res =>
      dispatch({type:'SUCCESS', res:data}))
  },[])


  return (
    <div className="App">
      <h1>Lets'jump right now</h1>
      <p>More and more always</p>
    </div>
  );
}

export default App;
