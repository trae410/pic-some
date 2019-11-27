import React, {useEffect, useState} from "react"

const Context = React.createContext()
// const [photos, setPhotos] = useState([])


const CartContextProvider = (props) => {
	const [imageData, setImageData] = useState([])
	useEffect(() => {
    const url = "https://raw.githubusercontent.com/trae410/pic-some/master/public/images.json"
		fetch(url).then(rawData => rawData.json()).then(data => setImageData(data))
	},[])

	return (
		<Context.Provider value={{imageData}}>
			{props.children}
		</Context.Provider>
	)

}

export {CartContextProvider, Context}