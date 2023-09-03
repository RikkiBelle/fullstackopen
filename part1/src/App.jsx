const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.partName}: {props.partExercises}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.parts[0].name} partExercises={props.parts[0].exercises}/>
      <Part partName={props.parts[1].name} partExercises={props.parts[1].exercises}/>
      <Part partName={props.parts[2].name} partExercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Total exercises: {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}
export default App