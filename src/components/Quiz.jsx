

function Quiz({quizNo, form, text}){

    return(
        <>
            <h1>Quiz {quizNo}</h1>
            <button onClick={form}>{text}</button>
        </>
    )
}

export default Quiz