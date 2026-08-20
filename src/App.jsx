import './style/App.css'
import PastQuestions from './pieces/PastQuestions'
import Question from './pieces/question'
import Responses from './pieces/responses'
import QuestionRecomendations from './pieces/QuestionRecomendations'

function App() {
  return (
    <div className='row'>
      <div>
        <PastQuestions></PastQuestions>
        <QuestionRecomendations></QuestionRecomendations>
      </div>
      this one still works
      <div>
        <Question></Question>
        <Responses></Responses>
      </div>
      
    </div>
  )
}

export default App;