import { Header } from './components/Header';
import { Content } from './components/Content/Content';
import { Total } from './components/Total';

export const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  // Una forma de crear un mapa usando un arreglo de objetos
  const content = [{part: part1, exercise: exercises1},
                   {part: part2, exercise: exercises2},
                   {part: part3, exercise: exercises3}]

  // Otra forma de crear un mapa
  // const parts = new Map()
  // parts.set(part1, exercises1)
  // parts.set(part2, exercises2)
  // parts.set(part3, exercises3)

  return (
    <div>
      <Header course={course}/>
      
      {/* Del Ejercicio 1.1 */}
      {/* <Content part1={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} /> */}

      {/* Del Ejercicio 1.2 */}
      <Content content={content} />

      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}
