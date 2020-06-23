import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [timeRunning, setTimeRunning] = useState (false)

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  function wordCount(text){
    //trims off empty spaces before splitting to an array.length
    const wordsArr = text.trim().split(" ")
    console.log (wordsArr)
    //prevents an empty string from being a "word"
    return wordsArr.filter(word => word !== "").length
  }

  //useEffect take a function followed by an array of variables(dependencies).
  //When the dependency changes, useEffect rerenders
useEffect(() => {
  if(timeRunning && timeRemaining > 0){
    setTimeout(() => {
      setTimeRemaining(time => time-1)
    }, 1000)
  }
  //add a second dependency to trigger useEffect
}, [timeRemaining, timeRunning])


  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
      onChange={handleChange}
      value={text}
      />
      <h4> Time remaining: {timeRemaining}</h4>
{/* onClick changes timeRunning which triggers a re-render via useEffect */}
      <button onClick ={() => setTimeRunning(true) }>Start</button>
      <h1 onChange={() => console.log(wordCount(text))}> Word Count </h1>
    </>
  )
}

export default App;
