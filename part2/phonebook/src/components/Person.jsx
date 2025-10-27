const Person = ({showPersons}) => {
    return (
        <div>
         {showPersons.map((person) => <div key={person.id}>{person.name}  {person.number}</div>)}
         </div>
    )
}

export default Person