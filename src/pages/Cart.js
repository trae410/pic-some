import React, {useContext, useState} from "react"
import {Context} from "../CartContext"
import CartItem from "../components/CartItem"
import useMessage from "../hooks/useMessage"

const Cart = () => {
	const {cartItems, emptyCart} = useContext(Context)
	const [buttonText, setButtonText] = useState("Place Order")
	// const [successText, setSuccessText] = useState("")
	const [successMessage, showSuccess] = useMessage()

	const getTotal = () => {
		let total = 0
		cartItems.map(item => total += item.price * 1)
		return total.toLocaleString("en-US", {style: "currency", currency: "USD"})
	} 

	// get cart items and display each one 
	const cartItemComponents = cartItems.map(item => {
		return (
			<CartItem item={item} key={item.id} />
		)
	})

	// when place order clicked, change button text to "ordering" then simulate wait,
  // then empty cart and change button text back
  const simulateOrder = () => {
  	setButtonText("Ordering...")
  	setTimeout(() => {
  		showSuccess("Ordered successfully!")
  		setButtonText("PlaceOrder")
  		emptyCart()
  	}, 3000)
  }

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{successMessage()}
			{cartItemComponents}
			<p className="total-cost">Total: {getTotal()}</p>
			<div className="order-button">
				<button onClick={simulateOrder}>{buttonText}</button>
			</div>
		</main>
	)
}

export default Cart