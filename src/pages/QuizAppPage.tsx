import { FC, useState } from "react"
import QuizListPage from "./QuizListPage"

type QuizAppPageProps = {}

const QuizAppPage:FC<QuizAppPageProps> = () => {
    const [quizScore, setQuizScore] = useState<number>(0)
    console.log('score is ',quizScore)
    const handleQuizScore = (scoreCount:number) => {
        setQuizScore((prevQuizScore)=>{
            return prevQuizScore+scoreCount
        })
    }
    return (
        <div className="flex flex-col max-w-6xl
        mx-auto border px-5 py-3">
            <h1 className="text-5xl font-black">QUIZ APP</h1>
            <QuizListPage handleQuizScore={handleQuizScore} /> 
            <div><span>Score: </span><span className="font-bold text-lg">{quizScore}</span></div>
        </div>
    )
}
export default QuizAppPage