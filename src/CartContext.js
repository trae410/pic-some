import React, {useEffect, useState} from "react"

const Context = React.createContext()


const CartContextProvider = (props) => {
	const [imageData, setImageData] = useState([])
	const [cartItems, setCartItems] = useState([])

	const toggleFavorite = (id) => {
		// find image and change is favorite property
		const newImageData = imageData.map(img => {
			if (img.id === id) {
				return {
					...img,
					isFavorite: !img.isFavorite
				}
			} else return img
		})
		setImageData(newImageData)
	}

	const addToCart = (img) => {
		// get image and append to cart state array
		setCartItems(cartItems => [...cartItems, img])
	}

	const removeFromCart = (id) => {
		// get image and filter out from cart state array
		const newCartItems = cartItems.filter(img => img.id !== id)
		setCartItems(newCartItems)
	}

	useEffect(() => {
    const url = "https://raw.githubusercontent.com/trae410/pic-some/master/public/images.json"
		fetch(url).then(rawData => rawData.json()).then(data => setImageData(data))
	},[])

	return (
		<Context.Provider value={{
			imageData,
			toggleFavorite,
			addToCart,
			removeFromCart,
			cartItems
		}}>
			{props.children}
		</Context.Provider>
	)

}

export {CartContextProvider, Context}