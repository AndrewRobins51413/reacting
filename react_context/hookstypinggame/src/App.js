import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const DURATION = 5
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(DURATION)
  const [timeRunning, setTimeRunning] = useState (false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  function wordsCount(text){
    //trims off empty spaces before splitting to an array.length
    const wordsArr = text.trim().split(" ")
    console.log (wordsArr)
    //prevents an empty string from being a "word"
    return wordsArr.filter(word => word !== "").length
  }

    function startGame(){
      setText("")
      setTimeRemaining(DURATION)
      setWordCount(0)
      setTimeRunning(true)

    }

  //useEffect take a function followed by an array of variables(dependencies).
  //When the dependency changes, useEffect rerenders
useEffect(() => {
  if(timeRunning && timeRemaining > 0){
    setTimeout(() => {
      setTimeRemaining(time => time-1)
        }, 1000)
  }else if (timeRemaining === 0){
      setTimeRunning(false)
      setWordCount(wordsCount(text))
  }
  //add a second dependency to trigger useEffect
}, [text, timeRemaining, timeRunning])


  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
      onChange={handleChange}
      value={text}
      disable={!timeRunning}
      />
      <h4> Time remaining: {timeRemaining}</h4>
{/* onClick changes timeRunning which triggers a re-render via useEffect */}
      <button
        onClick ={startGame}
        disable={timeRunning}
        >Start</button>
      <h1> Word Count: {wordCount} </h1>
    </>
  )
}

export default App;
