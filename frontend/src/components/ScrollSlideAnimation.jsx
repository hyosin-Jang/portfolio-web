import React, {useEffect, useRef, useState} from "react"
import styled, {css, keyframes} from "styled-components"

import useWindowScroll from "../hooks/useWindowScroll"
import checkIsInViewport from "../utils/checkIsInViewport"

const ScrollSlideAnimation = ({children, direction = "top"}) => {
	const elemRef = useRef(null)
	const [isInViewPort, setIsInViewPort] = useState(checkIsInViewport(elemRef?.current))

	useEffect(() => {
		setIsInViewPort(checkIsInViewport(elemRef?.current))
	}, [elemRef?.current === undefined])

	useWindowScroll(() => {
		setIsInViewPort(checkIsInViewport(elemRef?.current))
	})

	return (
		<Wrapper
			ref={elemRef}
			isInViewPort={isInViewPort}
			direction={direction}>
			{children}
		</Wrapper>
	)
}

export default ScrollSlideAnimation

const Wrapper = styled.div`
	${({isInViewPort, direction}) => {
		const axis = direction === "top" || direction === "bottom" ? "Y" : "X"
		const dir = direction === "bottom" || direction === "right" ? -1 : 1

		const [translateForm, translateTo] = [`translate${axis}(${4 * dir}rem)`, `translate${axis}(0)`]
		const defaultStyle = css`
         transform: ${translateForm}
         opacity: 0;
      `
		const keyframe = keyframes`
      from { transform: ${translateForm}; opacity: 0; }
      to { transform: ${translateTo}; opacity: 1; }
  `
		const animationRule = css`
			${keyframe} 2s ease
		`
		return css`
			${!isInViewPort && defaultStyle}
			animation: ${isInViewPort && animationRule};
		`
	}}
`
