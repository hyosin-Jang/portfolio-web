import styled from "styled-components"

const Header = () => {
	return (
		<Wrapper>
			<span className="home">Header</span>
		</Wrapper>
	)
}

export default Header

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	background-color: orange;
	width: 100%;
	height: 60px;

	display: flex;
	align-items: center;
	padding: 0 1rem;

	.home {
		font-size: 2rem;
		font-weight: 800;
	}
`
