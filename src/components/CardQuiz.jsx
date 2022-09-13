import QuizQuestion from './QuizQuestion'
import QuizAnswers from './QuizAnswers'
import {useContext} from 'react'
import {QuizContext} from '../context/QuizContext'

export default function CardQuiz(){

	const {puntos, perdiste, tiempo, intentos} = useContext(QuizContext)

	return(
		<div className="card">
			<div className="card-header d-flex justify-content-between">
				<p className="h5">Puntos: {puntos}</p>
				{perdiste ? <p className="btn btn-danger btn-sm">Perdiste</p> : <p className="h5">Tiempo: {tiempo}</p>}
				{intentos === 0 ? <p className="btn btn-danger btn-sm">Ultimo intento</p> : <p className="h5">Intentos: {intentos}</p>}
			</div>
			<div className="card-body row">
				<QuizQuestion />	
			</div>
		</div>
	)
}