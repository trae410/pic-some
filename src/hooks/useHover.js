import React, {useState, useRef, useEffect} from 'react'

const useHover = () => {
	const [isHovering, setIsHovering] = useState(false)
	const ref = useRef(null)

	const mouseEnter = () => {
		setIsHovering(true)
	}
	const mouseLeave = () => {
		setIsHovering(false)
	}

	useEffect(() => {
		//add hover listeners
		ref.current.addEventListener("mouseenter", mouseEnter)
		ref.current.addEventListener("mouseleave", mouseLeave)

		//cleanup
		return () => {
			ref.current.removeEventListener("mouseenter", mouseEnter)
			ref.current.removedventListener("mouseleave", mouseLeave)
		}
	},[])

	return {isHovering, ref}
}

export default useHover 
