import styled from "styled-components"

const Box = ({text, icon}) => {
	return (
		<Wrapper>
			<img
				src={icon}
				className="icon"
				alt="icon"
			/>
			<p>{text}</p>
		</Wrapper>
	)
}

export default Box

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 1.5rem;
	border-radius: 1rem;
	margin-left: 1.5rem;
	background-color: rgb(249, 250, 252);

	.icon {
		width: 3rem;
		height: 3rem;
	}
`
