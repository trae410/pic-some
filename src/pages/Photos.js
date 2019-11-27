import React, {useContext} from "react"
import {Context} from '../CartContext'
import Image from '../components/Image'
import {getClass} from '../utils/index'


const Photos = () => {
	const {imageData} = useContext(Context)
	const images = imageData.map((img, i) => {
		const containerClass = `image-container ${getClass(i)}`
		return (
				<Image img={img} key={img.id} className={containerClass} />
		)
	})
	return (
		<main className="photos">
			{images}
		</main>
	)
}

export default Photos