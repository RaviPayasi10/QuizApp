import './App.css';
import Quiz from './components/Quiz';
import { useState } from 'react'
import Form from './components/Form';

function App() {

  const [form1, setForm1] = useState(false)
  const [form2, setForm2] = useState(false)
  const [text1, setText1] = useState('Start Quiz')
  const [text2, setText2] = useState('Start Quiz')
  const [totalScore1, setTotalScore1] = useState(0)
  const [totalScore2, setTotalScore2] = useState(0)


  const showForm1 = () => {
    setForm1(!form1)
    if(!form1){
      setText1('Stop Quiz')
    }else{
      setText1('Start Quiz')
    }
  }

  const showForm2 = () => {
    setForm2(!form2)
    if(!form2){
      setText2('Stop Quiz')
    }else{
      setText2('Start Quiz')
    }
  }

  // const scoreHandler = () => {
  //   const total = totalScore1 + totalScore2
  //   setFinalScore(total)
  // }

  const getTotalScore1 = (score) => {
    setTotalScore1(score)
  }

  const getTotalScore2 = (score) => {
    setTotalScore2(score)
  }

  return (
    <>
      
        <div className='row' >
          <Quiz quizNo={1} text={text1} form={showForm1} />
          {/* <Quiz quizNo={2} form={showForm}/> */}
          {form1 && <Form setTotalScore={getTotalScore1} />}
        </div>
      
        <div className='row'>
          <Quiz quizNo={2} text={text2} form={showForm2} />
          {/* <Quiz quizNo={2} form={showForm}/> */}
          {form2 && <Form setTotalScore={getTotalScore2} />}
        </div>
        <h2>Total Score: {totalScore1 + totalScore2}</h2>
    </>
  );
}

export default App;
