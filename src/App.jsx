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
          <Route path={"/"} element={<div className='column qa'>
            <Question/><Responses/>
          </div>}/>
          {/* <Route path={"/pastquestions"} element={<>
            <PastQuestions/>
          </>}/> */}
          {/* <Route path={"/questionrecomendations"} element={<>
            <QuestionRecomendations/>
          </>}/> */}
        </Routes>
    </>
  )
}

export default App;

/*
prevent multi click
cleear form
hamber not square 
absolute in large ghange to stick
responses
  use html table
  sort by not id
    time 
    user
    liked
  add time stamp
  center like with flex
    add thumbs up
  in flex with gap
  add border
  separate user and response user bold
  refuse empty resonses
not orange
consistent style
comment responses
round boxes
hover effect
standardinzing spacing
*/