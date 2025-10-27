import { useState } from "react";

const App = () => {
  const [persons, setPerson] = useState([{
    name: 'Arto Hellas',
    number: 9878765432,
    id: 1,
  }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setFilter(event.target.value)

  const showPersons = filter ? 
  persons.filter((person) => person.name.toLowerCase().includes(filter)): persons

  return (
    <div>
      <h1>PhoneBook</h1>
      <div>filter shown with  <input value={filter} onChange={handleFilter}/></div>
      <h1>add a number</h1>
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
     
      <h2>Numbers</h2>
      <div>
        {showPersons.map((person) =>  <div key={person.id}>{person.name}:  {person.number}</div>)}
      </div>
      
    </div>
  )
}

export default App