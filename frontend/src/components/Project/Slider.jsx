import React, {useEffect, useState} from "react"

import styled from "styled-components"

const Slider = ({images}) => {
	const [curSlideIdx, setCurSlideIdx] = useState(0)
	const slideWidth = "100"

	const nextSlide = (e) => {
		setCurSlideIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
	}
	const prevSlide = (e) => {
		setCurSlideIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
	}

	console.log("curSlideIdx", curSlideIdx)
	return (
		<Wrapper>
			<div
				className="slides"
				style={{
					transform: `translateX(-${slideWidth * curSlideIdx}%)`,
					transition: "transform 0.5s ease-in-out",
				}}>
				{images &&
					images.map((image, idx) => (
						<div
							key={idx}
							className="slide">
							<Img
								key={idx}
								src={image.data}
								alt={`image-${idx}`}
							/>
						</div>
					))}
			</div>
			<button
				className="prev"
				onClick={prevSlide}>
				{"<"}
			</button>
			<button
				className="next"
				onClick={nextSlide}>
				{">"}
			</button>
		</Wrapper>
	)
}

export default React.memo(Slider)

const Img = styled.img`
	width: 200px;
	height: 20rem;
	border-radius: 2rem;
	display: inline-block;
`
const Wrapper = styled.div`
	width: 20rem;
	height: 20rem;

	position: relative;
	overflow: hidden;
	display: flex;

	.slides {
		display: flex;

		.slide {
			flex: 0 0 100%;
		}

		.slide img {
			max-width: 100%;
		}
	}

	.prev,
	.next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: transparent;
		border: none;
		color: white;
		font-size: 24px;
		cursor: pointer;
	}

	.prev {
		left: 10px;
	}

	.next {
		right: 10px;
	}
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
