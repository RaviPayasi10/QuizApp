import {useState} from 'react'
import QuestionList from './QuestionList'

function Form({setTotalScore}){

    const [noQuestions, setNoQuestions] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [operators, setOperators] = useState('')
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = (e) => {
        // setNoQuestions(e.target.noQuestions)
        // setFrom(e.target.from)
        // setTo(e.target.to)
        // setOperators(e.target.operators)

        console.log(noQuestions)
        console.log(from)
        console.log(to)
        console.log(operators)
        if(noQuestions === '' || from === '' || to === '' ){
            alert('Please enter some values')
        }else{
            setSubmitted(true)
        }
        e.preventDefault();
    }

    return (
        <>
        {submitted ? <QuestionList questions={noQuestions} min={from} max={to} setTotalScore={setTotalScore}/> : 
        <form onSubmit={handleSubmit}>
          <label>No. of questions : </label>
          <input onChange={(e) => {setNoQuestions(e.target.value)}} 
            type='text' value={noQuestions}placeholder='Questions'></input>
          <label>Range of numbers: </label>
          <input onChange={(e) => {setFrom(e.target.value)}}
            type='text' value={from} placeholder='From'></input>
          <input  onChange={(e) => {setTo(e.target.value)}}
            type='text' value={to} placeholder='To'></input>
          <label>Operators: </label>
          <input onChange={(e) => {setOperators(e.target.value)}} 
            type='text' value={operators} placeholder='operators'></input>
          <button type="submit">Submit</button>
        </form>
}
        </>
    )
}

export default Form