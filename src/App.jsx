import './style/App.css';
import PastQuestions from './pieces/PastQuestions';
import Question from './pieces/question';
import Responses from './pieces/responses';
import QuestionRecomendations from './pieces/QuestionRecomendations';
import { Route, Routes } from 'react-router-dom';
import Nav from './pieces/nav';

function App() {
  return (
    <>
      <div>
        <Nav/>
      </div>
        <Routes>
          <Route path={"/"} element={<div className='column'>
            <Question/><Responses/>
          </div>}/>
          <Route path={"/pastquestions"} element={<>
            <PastQuestions/>
          </>}/>
          <Route path={"/questionrecomendations"} element={<>
            <QuestionRecomendations/>
          </>}/>
        </Routes>
    </>
  )
}

export default App;