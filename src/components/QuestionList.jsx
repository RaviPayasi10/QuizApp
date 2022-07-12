import {useState} from 'react'
import Question from './Question'
import uuid from 'react-uuid'

function QuestionList({questions, min, max, setTotalScore}){
    
    const [list, setList] = useState([])
    const [quesNo, setQuesNo] = useState(0)
    const [total, setTotal] = useState(0)
    const [ans, setAns] = useState('')

    const correctAns = []
    const incorrectAns = []

    const operators = ['+','-','*','/']
    let randomOperator
    // let opt;
    
    const lRange = parseInt(min)
    const hRange = parseInt(max)
    for(let i=0;i<questions;i++){
        const num1 = parseInt(( Math.random() * (hRange-lRange) + lRange ).toFixed(0));
        const num2 = parseInt((Math.random() * (hRange-lRange) + lRange).toFixed(0));
        randomOperator = operators[(Math.random() * 3).toFixed(0)]
        // console.log(randomOperator)
        
        let res;
        if(randomOperator === '+'){
            res = num1 + num2
        }else if(randomOperator === '-'){
            res = num1 - num2
        }else if(randomOperator === '*'){
            res = num1 * num2 
        }else{
            res = num1 / num2 
        }
        list.push({num1,num2,res,randomOperator})
    }
    
    
    const handleNext = () => {
        // getTotalScore();
        setAns('')
        let newAns = parseInt(ans)
        if(newAns === list[quesNo].res){
            setTotal(total + 1)
            setTotalScore(total+1)
            
        }
        setQuesNo(quesNo + 1)
    }

    return(
        <>
            <h1>Total Score : {total}</h1>
            {quesNo <= questions-1 ? <><h3>What is {list[quesNo].num1} {list[quesNo].randomOperator} {list[quesNo].num2}</h3>
                <input type='text' placeholder='Answer' onChange={(e) => setAns(e.target.value)}></input>
                <button onClick={handleNext} >Submit</button>
                </>
                :
                <h1>Quiz Over</h1>
                
            }
        </>    
    )
}

export default QuestionList