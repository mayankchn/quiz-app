import { FC, useEffect, useState } from "react"
import { getQuizes } from "../api"
import QuizList from "../components/QuizList"
import { Q } from "../models/quiz"
import LoadingPage from "./LoadingPage"

type QuizListPageProps = {
    handleQuizScore : (quantity:number) => void
}

const QuizListPage:FC<QuizListPageProps> = ({handleQuizScore}) => {

    const [quizes,setQuizes] = useState<Q[]>([])
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(()=>{
        const p = getQuizes().then((data)=>{
            console.log('data in api ',data.results)
            setQuizes(data.results)
            setLoading(false)
        });
    },[])

    if(loading){
        return <LoadingPage />
    }

    return (
        // <p>hello</p>
        <QuizList quizes={quizes} handleQuizScore={handleQuizScore} />
    )
}
export default QuizListPage