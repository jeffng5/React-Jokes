import { useEffect, useState } from "react";
import JokeList from "./JokeList"
import { FidgetSpinner } from 'react-loader-spinner'
import Joke from "./Joke"
import Popup from "reactjs-popup";
import "./App.css"

function App() {
 const [state, setState]= useState(true)

 useEffect(() => {
    setInterval(() => { 
      setState(false)
    }, 5000);
  },[])
// function ActionLink() {
//   const handleClick = (evt) => {evt.preventDefault();
//    console.log("This is being updated") }
//   }


return (
        <div className="App">
<div>
<Popup trigger={<button className="trigger">Load</button>} position="right center">
<div className= 'fidget'><FidgetSpinner
  visible= {true}
  height="380"
  width="380"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper"
  /><h3>Loading...</h3></div>
  </Popup>                
  </div>        


<h1>Joke Generator</h1>
                <div><JokeList/></div><Joke />
                <div><JokeList/></div><Joke />
                <div><JokeList/></div><Joke />
                <div><JokeList/></div><Joke />
                <div><JokeList/></div><Joke />

  
;
        </div>
       
    );
}









export default App;
