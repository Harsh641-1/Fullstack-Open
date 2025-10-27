import { useState } from "react";

const App = () => {
  const [persons, setPerson] = useState([{
    name: 'Arto Hellas',
    number: 9878765432,
    id: 1,
  }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)){
      alert(`${newName} is already added to phoneBook`)
      setNewName('')
      return
    }
    
    const personsCopy = persons.concat({
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    })
    
    setPerson(personsCopy)
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>PhoneBook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
        </div>
          <button type="submit">add</button>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) =>  <div key={person.id}>{person.name}:  {person.number}</div>)}
      </div>
      
    </div>
  )
}

export default App