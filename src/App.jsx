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
Notes to add

add photos in response and question
prevent multi click
clear form
hamberg not square 
absolute in large change to stick
responses
  use html table
  sort by not id
    time 
    user
    liked
  add time stamp
  center like with flex
    switch to thumbs up
  in flex with gap
  add border
  separate user and response, user bold
  refuse empty responses
  comment responses
not orange
consistent style
round boxes
hover effect on buttons
standardinzing spacing
*/