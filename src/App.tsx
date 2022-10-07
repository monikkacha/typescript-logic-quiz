import Quiz from "./components/Quiz"
import Counter from "./components/Counter"
import { BsPatchQuestionFill } from 'react-icons/bs'
import { questionList } from './utils/constants'
import { connect } from "react-redux"

function App() {

  return (
    <>
      <Quiz questionList={questionList} />
    </>
  )
}

export default connect()(App)
