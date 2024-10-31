import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Main() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedInput = localStorage.getItem('username') || [];
        if (savedInput) {
            setInput(savedInput);
        }
    }, []);

    const startQuiz = () => {
        if (input.trim() === '') {
            alert('Please fill in this field');
        } else {
            const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
            const newUser = {
                id: uuidv4(), 
                username: input,
                score: 0,
                total: 0,
            };
            usersData.push(newUser);
            localStorage.setItem('usersData', JSON.stringify(usersData));
            navigate('/quiz', { state: { userId: newUser.id } }); 
        }
    };

    return (
        <div className="main">
            <div className="box">
                <h1>Quiz App</h1>
            </div>
            <h2 className="instructions-title">Instructions for the Quiz:</h2>
            <ul className="instructions-list">
                <li>The quiz contains 10 multiple-choice questions.</li>
                <li>Select the correct answer from the given options for each question.</li>
                <li>Once you submit, you cannot change your answers.</li>
                <li>Your results will be shown at the end.</li>
            </ul>
            <div className="input">
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
}

export default Main;
