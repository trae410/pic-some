import React, {useState} from 'react'
import useHover from '../hooks/useHover';


const Image = ({img}) => {
	const {isHovering, ref} = useHover()

	const heartIcon = () => {
		if (isHovering) {
			return <i className="ri-heart-line favorite"></i>
		}
	}
	const cartIcon = () => {
		if (isHovering) {
			return <i className="ri-shopping-cart-line cart" ></i>
		}
	}
	return (
		<>
			<img src={img.url} alt="" 
			className="image-grid" 
			ref={ref}/>
			{heartIcon()}
			{cartIcon()}
		</>
	)
}

export default Image