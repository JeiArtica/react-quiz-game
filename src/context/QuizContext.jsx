import {createContext, useState, useEffect} from 'react'

export const QuizContext = createContext()

export function QuizContextProvider(props){

	const [tiempo, setTiempo] = useState(30)
	const [intentos, setIntentos] = useState(3)
	const [puntos, setPuntos] = useState(0)
	const [perdiste, setPerdiste] = useState(false)

	function rTimeInt(){
		if(intentos > 0){
			setIntentos(intentos-1)
		}else{
			setPerdiste(true)
		}
		setTiempo(30)
	}

	useEffect(() => {
		let time = setInterval(() => {
			tiempo > 0 ? setTiempo(tiempo-1) : rTimeInt()
		}, 1000)

		return () => clearInterval(time)

	}, [tiempo])

	return(
		<QuizContext.Provider value={{
			intentos,
			setIntentos,
			setTiempo,
			puntos,
			setPuntos,
			setPerdiste,
			perdiste,
			tiempo
		}}>
			{props.children}
		</QuizContext.Provider>
	)
}