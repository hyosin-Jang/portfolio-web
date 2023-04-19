import styled from "styled-components"
import {flexCenter} from "../styles/theme"
import githubIcon from "../assets/images/icon-github.png"
import instagramIcon from "../assets/images/icon-instagram.png"
const Footer = () => {
	return (
		<Wrapper>
			<div className="icon-sns">
				<span>
					<img
						src={githubIcon}
						alt="icon-github"
						className="icon"
					/>
				</span>
				<span>
					<img
						src={instagramIcon}
						alt="icon-github"
						className="icon"
					/>
				</span>
			</div>
			<div className="copyright">Copyright @2023. Hyosin All rights reserved</div>
		</Wrapper>
	)
}

export default Footer

const Wrapper = styled.section`
	${flexCenter}
	background-color: lightgrey;
	padding: 5rem 0 2rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.icon-sns {
		display: flex;
		gap: 3rem;
		span > img {
			width: 5rem;
			height: 5rem;
		}
	}
`
