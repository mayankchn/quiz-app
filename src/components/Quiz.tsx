import { FC, useState } from "react"
import { Q } from "../models/quiz"

type QuizProps = {
    quiz: Q;
    handleQuizScore: (quantity: number) => void
}

const Quiz: FC<QuizProps> = ({ quiz, handleQuizScore }) => {
    let randInd = Math.floor(Math.random() * quiz.incorrect_answers.length)
    console.log(randInd)

    const [clicked, setClicked] = useState<boolean>(false)

    const handleCorrectAns = () => {
        setClicked(true)
        handleQuizScore(10)
    }
    const handleIncorrectAns = () => {
        setClicked((true))
        handleQuizScore(0)
    }
    return (
        <div>
            <p className="font-semibold text-xl" dangerouslySetInnerHTML={{ __html: quiz.question }}></p>
            <ul className="flex flex-col gap-1">
                {
                    quiz.incorrect_answers.map((q, i) =>
                        <>
                            <button
                                key={i}
                                onClick={handleIncorrectAns}
                                type="button"
                                className="bg-gray-100 px-2 py-1 cursor-pointer active:bg-red-500 active:text-white text-start w-full"
                                disabled={clicked}
                            >
                                <span dangerouslySetInnerHTML={{ __html: q }}></span>
                            </button>
                            {randInd == i && <button onClick={handleCorrectAns} type="button" className="bg-gray-100 px-2 py-1 cursor-pointer active:bg-green-500 active:text-white text-start w-full" disabled={clicked}><span dangerouslySetInnerHTML={{ __html: quiz.correct_answer }}></span>
                </button>}
                        </>
                    )
                }
            </ul>
        </div>
    )
}
Quiz.defaultProps = {}

export default Quiz