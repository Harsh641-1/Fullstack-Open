import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

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
      <Filter value={filter} onChange={handleFilter}/>
      <h1>add a number</h1>
      
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} 
      addPerson={addPerson}/>

      <h2>Numbers</h2>
      <div>
       <Person showPersons={showPersons}/>
      </div>
      
    </div>
  )
}

export default App