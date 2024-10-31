import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './components/Main';
import Quiz from './components/Quiz';
import ShowReport from './components/ShowReport';
import ViewMistake from './components/ViewMistake';
// import QuizFeedback from './components/QuizFeedback';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/show-report' element={<ShowReport/>}/>
          <Route path='/view-mistake' element={<ViewMistake/>}/>
          {/* <Route path='/quiz-feedback' element={<QuizFeedback/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
