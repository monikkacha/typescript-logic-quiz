import { useDispatch, useSelector } from "react-redux"
import Counter from "./Counter"
import { State } from './../redux/store'
import { NextQuestion, IncreasePoint } from './../redux/actions'

type QuestionItem = {
    questionName: String
    option: String[]
    answer: Number
}

type QuestionListType = {
    questionList: QuestionItem[]
}

const Quiz = ({ questionList }: QuestionListType) => {
    const dispatch = useDispatch()
    const data = useSelector((state: State) => state.reducer);

    const handleAnswer = (index: number) => {
        if (index === questionList[data.count].answer) {
            dispatch(IncreasePoint);
        }
        dispatch(NextQuestion)
    }

    return (
        <div className='bg-gray-400 w-full h-screen flex justify-center items-center flex-col relative'>
            <Counter />
            <div className='min-w-[400px] mt-10'>
                <p className='text-gray-900 text-center text-3xl'>
                    {questionList[data.count].questionName}
                </p>
                <ul className="mt-20">
                    {
                        questionList[data.count].option.map((item, i) => (
                            <>
                                <li
                                    key={i}
                                    onClick={() => handleAnswer(i)}
                                    className="w-full bg-black text-gray-300 mt-6 flex items-center justify-center h-12 capitalize rounded-md border-2 border-black hover:bg-gray-400 hover:text-black transition duration-300 cursor-pointer">
                                    {item}
                                </li>
                            </>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Quiz