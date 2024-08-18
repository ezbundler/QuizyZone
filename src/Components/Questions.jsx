import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../utils/data.js';

const Questions = ({ setActivities }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const quizData = data.quiz.find(q => q.category.toLowerCase() === category.toLowerCase());
  const questions = quizData ? quizData.questions : [];

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      if (selectedAnswer) {
        if (selectedAnswer === question.correctAnswer) {
          totalScore += 2; // Correct answer: +2 points
        } else {
          totalScore -= 0.5; // Incorrect answer: -0.5 points
        }
      }
    });
    setScore(totalScore);

    // Update recent activities
    setActivities(prevActivities => [
      { category, score: totalScore },
      ...prevActivities.slice(0, 2),
    ]);
  };

  const handleClick = () => {
    navigate("/container");
  };

  return (
    <div className="questions p-4">
      <h2 className="text-2xl font-bold mb-4">
        {category ? `${category.toUpperCase()} Questions` : 'Questions'}
      </h2>
      {questions.map((question, index) => (
        <div key={index} className="mb-6">
          <p className="font-semibold">{question.question}</p>
          <div className="flex flex-col">
            {Object.entries(question.options).map(([key, option]) => (
              <label key={key} className="mb-1">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={key}
                  onChange={() => handleAnswerSelect(index, key)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      {score === null ? (
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      ) : (
        <div className="mt-4">
          <p className="text-lg font-bold">Your Score: {score}</p>
          <button onClick={handleClick} className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-700">
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;
