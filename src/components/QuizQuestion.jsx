import {useState} from 'react'
import {Answers} from '../data/Answers'
import {useContext} from 'react'
import {QuizContext} from '../context/QuizContext'

export default function QuizQuestion(){

	const {perdiste, intentos, puntos, setPuntos, setTiempo, setPerdiste, setIntentos} = useContext(QuizContext)

	const [answers, setAnswers] = useState(Answers)
	const [random, setRandom] = useState(Math.round(Math.random()*100))

	const badAnswer = (e) =>{
		if(intentos > 0){
			setIntentos(intentos-1)
			setTiempo(30)
			setRandom(Math.round(Math.random()*100))
		}else{
			setPerdiste(true)
		}
	}

	const correctAnswer = (e) =>{
		setPuntos(puntos+1)
		setTiempo(30)
		setRandom(Math.round(Math.random()*100))
	}

	const handleClick = (e) => {
		setPerdiste(false)
		setTiempo(30)
		setIntentos(3)
	}

 	return (
 		<>
			{
				answers.map(answer => (
					answer.id === random ? 
						<div key={answer.id} className="p-4">
							<p className="h4">{answer.pregunta}</p>
							{
								perdiste === false ? 
								<div>
									<button className="btn btn-info mr-1 mb-1" 
									onClick={() => answer.respuesta1 === answer.solucion ? correctAnswer() : badAnswer()}>1. {answer.respuesta1}</button>
									<button className="btn btn-info mr-1 mb-1" 
									onClick={() => answer.respuesta2 === answer.solucion ? correctAnswer() : badAnswer()}>2. {answer.respuesta2}</button>
									<button className="btn btn-info mb-1" 
									onClick={() => answer.respuesta3 === answer.solucion ? correctAnswer() : badAnswer()}>3. {answer.respuesta3}</button>
								</div> : <button onClick={handleClick} className="btn btn-success">Reiniciar</button>
							}
						</div>
					: null	
				))
			}
		</>
 	)
}