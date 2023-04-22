import React, {useEffect, useState} from "react"

import styled from "styled-components"

const Slider = ({images}) => {
	return (
		<Wrapper>
			{images &&
				images.map((image, idx) => (
					<Img
						key={idx}
						src={image.data}
						alt=""
					/>
				))}
		</Wrapper>
	)
}

export default React.memo(Slider)

const Img = styled.img`
	width: 20rem;
	height: 20rem;
	border-radius: 2rem;
	display: inline-block;
`
const Wrapper = styled.div`
	width: 20rem;
	height: 20rem;

	overflow-x: auto;
	display: flex;
`

const StyledComment = styled.div`
	display: flex;
	flex-direction: column;

	& + & {
		margin-top: 1.1rem;
	}

	.comment-row {
		display: flex;
		justify-content: space-between;
	}
`
