import React, {useContext} from 'react'
import {Context} from '../CartContext'

const CartItem = ({url}) => {
	// get cart items and show them on this page with a delete icon 
	console.log(url)
	return (
		<div className="cart-item">
			<img src={url} alt="" />
		</div>
	);
}

export default CartItem

