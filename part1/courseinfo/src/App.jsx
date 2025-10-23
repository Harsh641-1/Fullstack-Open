const Header = (props) => {
    console.log(props)

  return (
    
    <h1>{props.course_name}</h1>
    
  )
}

const Content = (props) => {
    console.log(props)

  return (
    <>
    {props.parts.map((part, index) => (
      <Part key={index} part={part.name} exercise={part.exercise} />
    ))}
    
</>
  )

   
}

const Total = (props) => {
    console.log(props)
    const total = props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise

  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
    name: 'Fundamentals of React',
    exercise: 10,
  },
   {
    name: 'Using props to pass data',
    exercise: 7,
  },
  {
    name: 'State of a component',
    exercise: 14,
  },]}

  return (
    <div>
      <Header course_name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>

    </div>
  )
}

export default App
