import React, { useEffect, useState } from 'react'
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";
import { useLocation } from 'react-router-dom';

function Quiz() {

    const location = useLocation();
    const userId = location.state.userId;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(null);
    const [showData, setShowData] = useState(false);

    

    useEffect(() => {
        const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
        const currentUser = usersData.find(user => user.id === userId);

        if (currentUser) {
            setScore(currentUser.score);
        }
    }, [userId]);

    const changeQuestion = () => {
        updateScore();

        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClicked(null);
        } else {
            setShowData(true);
            const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
            const currentUser = usersData.find(user => user.id === userId);

            if (currentUser) {
                currentUser.total = QuizData.length;
                currentUser.score = score;
                localStorage.setItem('usersData', JSON.stringify(usersData));
            }
        }
    };

    const updateScore = () => {
        const usersData = JSON.parse(localStorage.getItem('usersData')) || []; 
        const currentUser = usersData.find(user => user.id === userId);

        if (clicked === QuizData[currentQuestion].answer) {
            setScore(score + 1);

            if (currentUser) {
                currentUser.score = score + 1;
            }
        }

        if (currentUser) {
            currentUser.total = currentQuestion + 1;
            localStorage.setItem('usersData', JSON.stringify(usersData)); 
        }
    };

    const Reset = () => {
        setClicked(0);
        setCurrentQuestion(0);
        setScore(0);
        setShowData(false);
    };

    return (
        <>
            <div>
                <p className="heading-txt">Quiz App</p>
                <div className="container">
                    {showData ? (
                        <QuizResult score={score} total={QuizData.length} tryAgain={Reset} />
                    ) : (
                        <>
                            <div className="question">
                                <span id='question-number'>{currentQuestion + 1}</span>
                                <span id='question-txt'>{QuizData[currentQuestion].question}</span>
                            </div>

                            <div className="option-container">
                                {QuizData[currentQuestion].options.map((option, index) => (
                                    <button
                                        className={`option-btn ${clicked === index + 1 ? "checked" : ""}`}
                                        key={index}
                                        onClick={() => setClicked(index + 1)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            <input
                                type="button"
                                value="Next"
                                id='next-button'
                                onClick={changeQuestion}
                                disabled={clicked === null} 
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Quiz;
