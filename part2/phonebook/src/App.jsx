import { useState } from "react";

const App = () => {
  const [persons, setPerson] = useState([{
    name: 'Arto Hellas',
    id: 1
  }])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personsCopy = persons.concat({
      name: newName,
      id: persons.length + 1,
    })
    setPerson(personsCopy)
    setNewName('')
  }

  const handleNewName = () => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h1>PhoneBook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
        </div>
          <button type="submit">add</button>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) =>  <div key={person.id}>{person.name}</div>)}
      </div>
      
    </div>
  )
}

export default App