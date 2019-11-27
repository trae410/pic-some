import React from 'react'

const Image = ({img}) => {
	return (
		<img src={img.url} alt="" className="image-grid" />
	)
}

export default Image