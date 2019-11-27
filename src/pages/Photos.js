import React, {useContext} from "react"
import {Context} from '../CartContext'
import Image from '../components/Image'

const Photos = () => {
	const {imageData} = useContext(Context)
	const images = imageData.map(img => {
		console.log(img)
		return (
			<div key={img.id} className="image-container">
				<Image img={img} />
			</div>
		)
	})
	return (
		<main className="photos">
			{images}
		</main>
	)
}

export default Photos