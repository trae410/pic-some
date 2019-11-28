import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

const CartContextProvider = ({children}) => {
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

	const emptyCart = ()  => {
		setCartItems([])
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
			cartItems,
			emptyCart
		}}>
			{children}
		</Context.Provider>
	)
}

CartContextProvider.propTypes = {
	children: PropTypes.object
}

export {CartContextProvider, Context}