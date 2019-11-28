import React, {useContext} from 'react'
import {Context} from '../CartContext'
import useHover from '../hooks/useHover'
import PropTypes from 'prop-types'

const CartItem = ({item}) => {
	// get cart items and show them on this page with a delete icon and price
	const {removeFromCart} = useContext(Context)
	// if bin hovered change class to fill
	const [isHovering, ref] = useHover()
	const canClassName = isHovering ? "ri-delete-bin-fill" : "ri-delete-bin-line"

	return (
		<div className="cart-item">
			<i className={canClassName} ref={ref} onClick={() => removeFromCart(item.id)} />
			<img src={item.url} alt="" width="130px" />
			<p>$ {item.price}</p>
		</div>
	);
}

CartItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		price: PropTypes.string
	})
}

export default CartItem

