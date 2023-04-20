import {useEffect} from "react"

const useWindowScroll = (listener) => {
	useEffect(() => {
		window.addEventListener("scroll", listener)

		// clean-up
		return () => {
			window.removeEventListener("scroll", listener)
		}
	}, [])
}

export default useWindowScroll
