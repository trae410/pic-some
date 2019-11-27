import React, {useEffect} from "react"

const Context = React.createContext()
// const [photos, setPhotos] = useState([])


const CartContextProvider = (props) => {

	useEffect(() => {
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
		fetch(url).then(rawData => rawData.json()).then(data => console.log(data))
		
	},[])

	return (
		<Context.Provider value="test">
			{props.children}
		</Context.Provider>
	)

}

export {CartContextProvider, Context}