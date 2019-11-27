import {useState, useRef, useEffect} from 'react'

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
		const current = ref.current
		//add hover listeners
		current.addEventListener("mouseenter", mouseEnter)
		current.addEventListener("mouseleave", mouseLeave)

		//cleanup
		return () => {
			current.removeEventListener("mouseenter", mouseEnter)
			current.removeEventListener("mouseleave", mouseLeave)
		}
	},[])

	return [isHovering, ref]
}

export default useHover 
