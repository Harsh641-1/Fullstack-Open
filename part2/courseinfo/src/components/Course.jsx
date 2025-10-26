const Course = (props) => {
  const {courses} = props

  return (
    <div>
      {courses.map((course) => {
        return (
      <div key={course.id}>
      <Header course={course.name} />
      <Content  parts={course.parts} />
      <Total parts={course.parts} />
    </div>
        )
      })}
    </div>
  )
}

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  const {parts} = props
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.id} part={part} />
        )
      })}
    </div>
    
  )
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  const {parts} = props
  return (
     <p><strong>total of {parts.reduce((sum,part) => {
      return sum + part.exercises
     },0)} exercises</strong></p>
  )
}

export default Course

