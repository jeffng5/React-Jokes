import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";



/** List of jokes. */

function JokeList()  {
  const INITIAL_STATE = []
  const [joke, setJoke] = useState(INITIAL_STATE)

 
  useEffect(() => {
    async function getJoke(){
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
     
      setJoke(res.data.joke);
    }
    getJoke();
  }, [setJoke]);


  return (
    <>
    <div>{joke}</div>
  
  </>



  )
  }

  
  


export default JokeList;
