import './quiz.css'
import React, { useState } from 'react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);

  
  const questions = [
		{
			questionText: 'What is the spanish translation of green?',
			answerOptions: [
				{ answerText: 'rojo', isCorrect: false },
				{ answerText: 'gracias', isCorrect: false },
				{ answerText: 'verde', isCorrect: true },
				{ answerText: 'hola', isCorrect: false },
			],
		},
		{
			questionText: 'What is the spanish translation of please?',
			answerOptions: [
				{ answerText: 'hola', isCorrect: false },
				{ answerText: 'Por favor', isCorrect: true },
				{ answerText: 'lo siento', isCorrect: false },
				{ answerText: 'azul', isCorrect: false },
			],
		},
		{
			questionText: 'What is the spanish translation of sorry?',
			answerOptions: [
				{ answerText: 'lo siento', isCorrect: true },
				{ answerText: 'amigo', isCorrect: false },
				{ answerText: 'rojo', isCorrect: false },
				{ answerText: 'Por favor', isCorrect: false },
			],
		},
		{
			questionText: 'What is the spanish translation of thank you?',
			answerOptions: [
        { answerText: 'hola', isCorrect: false },
        { answerText: 'lo siento', isCorrect: false },
        { answerText: 'gracias', isCorrect: true },
				{ answerText: 'amigo', isCorrect: false },
			],
		},
    {
			questionText: 'What is the spanish translation of hello?',
			answerOptions: [
				{ answerText: 'verde', isCorrect: false },
        { answerText: 'hola', isCorrect: true },
				{ answerText: 'Por favor', isCorrect: false },
				{ answerText: 'rojo', isCorrect: false },
			],
		},
    {
			questionText: 'What is the spanish translation of friend?',
			answerOptions: [ 
				{ answerText: 'gracias', isCorrect: false },
				{ answerText: 'azul', isCorrect: false },
				{ answerText: 'lo siento', isCorrect: false },
				{ answerText: 'amigo', isCorrect: true },
			],
		},
    {
			questionText: 'What is the spanish translation of red?',
			answerOptions: [
        { answerText: 'rojo', isCorrect: true },
				{ answerText: 'hola', isCorrect: false },
				{ answerText: 'amigo', isCorrect: false },
				{ answerText: 'gracias', isCorrect: false },
			],
		},
	];

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
     
		}


		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
 
		}

	};
	
	return (
		<div className='app'>
              <div class="w3-container">
              <h2 align = "center"> Test Your Knowledge!</h2>
              <div className='question-result'>

			{showScore ? (
				<div className='score-section'>
    		
    			  You scored {score} out of {questions.length}</div>

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button class="btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button> 
						))}
					</div>
				</>
			)}
      </div>
	    </div>
  	</div>
	);
};