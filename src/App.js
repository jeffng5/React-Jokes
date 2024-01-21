import { useEffect, useState } from "react";
import JokeList from "./JokeList"
import { FidgetSpinner } from 'react-loader-spinner'
import Joke from "./Joke"

import "./App.css"

function App() {
 
 const [state, setState]= useState(true)

 useEffect(() => {
    setInterval(() => { 
      setState(false)
    }, 3000);
  },[state])
// function ActionLink() {
//   const handleClick = (evt) => {evt.preventDefault();
//    console.log("This is being updated") }
//   }

if (state===true) {
  return (
  <body>
  <FidgetSpinner className="fidget" height="380" width= "380"/><h3 className= "backgroundLoading">Loading Jokes...</h3>

</body>
  )

 }     
  

if (state===false) {
    return (
      <>
      <div className="App">
<h1>Joke Generator</h1>
                <div><JokeList/></div><Joke />
                <div><JokeList/></div><Joke />
                <div><JokeList/></div><Joke />
                <div><JokeList/></div><Joke />
                <div><JokeList/></div><Joke />
</div>
  
 </>
    )      
    ;
}

}





export default App;
