import { useId, useState } from 'react'
import style from './inputElement.module.scss'

const InputElement = ({ header = '', inputText = '', type = 'text', sizeSmall = false }) => {
	const [inputValue, setInputValue] = useState(inputText)
	const id = useId()
	return (
		<div className={`${style.inputElement} ${sizeSmall ? style.sizeSmall : null}`}>
			<label htmlFor={header}>{header}</label>
			<input id={id} type={type} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
		</div>
	)
}

export default InputElement
