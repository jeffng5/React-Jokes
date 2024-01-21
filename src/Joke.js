import React, { useState, useEffect } from "react";
import "./Joke.css";


/** A single joke, along with vote up/down buttons. */

function Joke({id, vote, votes, text}) {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  
    function increment() {
      setCount(count+1);
      console.log(count)
    }
   
    function increment1() {
      setCount1(count1 + 1);

    }



    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <span>       
          <button onClick={() => increment()}>
            <i className="fas-fa-thumbs-up" />
          </button>
          <h4 className="h4">{count}</h4>
          </span>
          <span>
          <button onClick={()=> increment1()}>
            <i className="fas fa-thumbs-down" />
          </button>
          <h4 className="h4">{count1}</h4>
        </span>
          {votes}
        
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  }

export default Joke;
