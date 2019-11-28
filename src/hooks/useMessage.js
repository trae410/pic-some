import React, {useState} from 'react'

const useMessage = () => {
	const [messageText, setMessageText] = useState("")
	const [messageClass, setMessageClass] = useState("show")

	const showSuccess = (text) => {
		const fade = () => setMessageClass("fade-out")
		if (text) {
			setMessageText(text)
			setTimeout(fade, 500)
		}
	}

	const successMessage = () => {
		if (messageText) {
			return (
				<h4 className={messageClass}>{messageText}</h4>
			)
		} else return null
	}

	return [
		successMessage,
		showSuccess
	 ]
}

export default useMessage