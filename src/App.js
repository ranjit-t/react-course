import './App.css';
import React, { useState } from 'react';

function App() {
 let[count,setCount] = useState(0);

function Add(){
  setCount(count+1);
  console.log(count);
}
function Remove(){
  setCount(count-1);
  console.log(count);
}
function Reset(){
  setCount(0);
  console.log(count);
}

  return (
    <div className="App"><p>{count}</p><button onClick={Add}>Add</button><button onClick={Remove}>Remove</button><button onClick={Reset}>Reset</button></div>
  );
}


export default App;
