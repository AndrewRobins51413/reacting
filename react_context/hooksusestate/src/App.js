import React, {useState, useEffect} from 'react';
import './App.css';
import randomcolor from "randomcolor"

function App() {
  const [inputData, setInputData] = useState({firstName:"", lastName:""})
  const[contactsData, setContactsData] = useState([])

  function handleChange(event) {
    const {name, value} = event.target
    setInputData(prevInputData => ({...prevInputData, [name]:value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
      setContactsData( prevContactData => [...prevContactData, inputData])
  }

  const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>
      {contact.firstName} {contact.lastName}
    </h2>)

const [count, setCount] = useState(0)
const [color, setColor] = useState("")

function increment(){
  setCount(prevCount => prevCount+1)
}
function decrement(){
  setCount(prevCount => prevCount-1)
}

//useEffect will run a function whenever the variable ([count]) changes
useEffect(() => {
  setColor(randomcolor())
}, [count])

//useEffect here is mounted once via the empty array [] , while the interval will run its function each second
// Also, the useEffect returns a "cleanup function" that will unmount the counter
// useEffect(() => {
//   const intervalId = setInterval(() => {
//     setCount(prevCount => prevCount+1)
//   }, 1000)
//   return() => clearInterval(intervalId)
// }, [])


  return (
    <>
      <h1 style={{color:color}}>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button> Add Contact </button>
      </form>
      <div style={{color:color}}>
      {contacts}
      </div>

    </>
  )
}

export default App;
