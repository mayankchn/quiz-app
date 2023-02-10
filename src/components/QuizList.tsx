import { FC } from "react"
import { Q } from "../models/quiz"
import Quiz from "./Quiz";

type QuizListProps = {
    quizes: Q[];
    handleQuizScore: (quantity: number) => void;
}

const QuizList: FC<QuizListProps> = ({ quizes, handleQuizScore }) => {

    return (
        <div>
            {
                quizes.map((quiz, i) => {
                    return (
                        <Quiz
                            key={i}
                            quiz={quiz}
                            handleQuizScore={handleQuizScore}
                        />
                    )
                })
            }
        </div>
    )
}
export default QuizList
