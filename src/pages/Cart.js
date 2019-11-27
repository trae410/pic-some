import React, {useContext} from "react"
import {Context} from "../CartContext"
import CartItem from "../components/CartItem"

const Cart = () => {
	//get cart items and display each one 
	const {cartItems} = useContext(Context)
	const cartItemComponents = cartItems.map(item => {
		return (
			<CartItem url={item.url} key={item.id} />
		)
	})

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemComponents}
			<p className="total-cost">Total Cost:</p>
			<div className="order-button">
				<button>Place Order</button>
			</div>
		</main>
	)
}

export default Cart