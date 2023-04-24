import styled from "styled-components"
import logo from "../assets/images/icon-logo.png"
import {flexCenter} from "../styles/theme"

const Header = () => {
	return (
		<Wrapper>
			<div className="home">
				<img
					className="logo"
					src={logo}
					alt="logo"
				/>
				<h1 className="title">Portfolio</h1>
			</div>
		</Wrapper>
	)
}

export default Header

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	background-color: black;
	color: white;
	width: 100%;
	height: 60px;
	z-index: 10;

	display: flex;
	align-items: center;
	padding: 0 1rem;

	.home {
		${flexCenter}

		margin-left: 1rem;
		.logo {
			width: 3rem;
			height: 3rem;
			transition: transform 0.5s ease-in-out;

			&:hover {
				transform: rotateY(180deg);
			}
		}

		.title {
			margin-left: 2rem;
		}
	}
`
