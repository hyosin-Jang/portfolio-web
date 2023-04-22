import {useState} from "react"

export const useInput = ({defaultValue}) => {
	const [value, setValue] = useState(defaultValue)

	const handleValue = (e) => {
		e.preventDefault()
		setValue(e.target.value)
	}

	return {value, handleValue}
}
