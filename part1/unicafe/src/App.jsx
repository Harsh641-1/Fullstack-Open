import { useState } from "react"

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
    if (scores.length === 0){
      return 0
    }
    const sum = scores.reduce((sum,score) => {
      return sum + score
    },0)
    const average = sum/total
    return average
  }

  const getPositiveFeedback = () => {
    if (scores.length === 0){
      return 0
    }
    const totalPositive = scores.filter((score) => score === 1).length
    const positivePercentage = (totalPositive/total) * 100
    return positivePercentage
  }

  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={addGood}>good</button>
      <button onClick={addNeutral}>neutral</button>
      <button onClick={addBad}>bad</button>

      <h1>statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {getAverage()}</p>
      <p>positive: {getPositiveFeedback()} %</p>

    </div>
  )
}
export default App
