import React, {useContext} from 'react'
import useHover from '../hooks/useHover';
import {Context} from '../CartContext'
import PropTypes from 'prop-types'


const Image = ({className, img}) => {
	const [isHovering, ref] = useHover()
	const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)

	const heartIcon = () => {
		// get the isFavorite property of the image and toggle it if icon clicked
		// if image favorite return filled heart and keep it there
		if (img.isFavorite) {
			return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)} ></i>
		}
		else if (isHovering) {
			return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)} ></i>
		}
	}

	const cartIcon = () => {
		// find out if the image is in cart and add or remove it from cart if icon clicked
		// if in cart return filled cart icon and keep it there
		const inCart = cartItems.some(item => item.id === img.id)
		if (inCart) {
			return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)} ></i>
		}
		else if (isHovering) {
			return <i className="ri-shopping-cart-line cart" onClick={() => addToCart(img)} ></i>
		}
	}

	return (
		<div className={className} ref={ref}>
			<img src={img.url} alt="" className="image-grid" />
			{heartIcon()}
			{cartIcon()}
		</div>
	)
}

Image.propTypes = {
	className: PropTypes.string.isRequired,
	img: PropTypes.shape({
		url: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool.isRequired
	})
}

export default Image