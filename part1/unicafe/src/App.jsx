import { useState } from "react"

const Statistics = (props) => {

  if (props.total === 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
        </div>
    )
  }

  return (
   <div>
      <h1>statistics</h1>
      <table>
        <tbody>
      <StatisticsLine text='good' value={props.good} />
      <StatisticsLine text='neutral' value={props.neutral} />
      <StatisticsLine text='bad' value={props.bad} />
      <StatisticsLine text='all' value={props.total} />
      <StatisticsLine text='average' value={props.average} />
      <StatisticsLine text='positive' value={props.positive} />
      </tbody>
      </table>
  </div>
  )

}

const StatisticsLine = (props) => {
  return (
    <tr><td>{props.text}:</td><td>{props.value}</td></tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [scores, setScores] = useState([])

  const addGood = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    setTotal(updatedGood + neutral + bad)
    setScores(scores.concat(1))
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    setTotal(good + updatedNeutral + bad)
    setScores(scores.concat(0))
  }

  const addBad = () => {
    setBad(bad + 1)
    const updatedBad = bad + 1
    setTotal(good + neutral + updatedBad)
    setScores(scores.concat(-1))
  }

  const getAverage = () => {
    const sum = scores.reduce((sum,score) => {
      return sum + score
    },0)
    const average = sum/total
    return average
  }

  const getPositiveFeedback = () => {
    const totalPositive = scores.filter((score) => score === 1).length
    const positivePercentage = (totalPositive/total) * 100
    return positivePercentage
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGood} text='good' />
      <Button onClick={addNeutral} text='neutral' />
      <Button onClick={addBad} text='bad' />
      
      <Statistics good={good} bad={bad} neutral={neutral} average={getAverage()} positive={getPositiveFeedback()} total={total}/>
    </div>
  )
}
export default App
