import styled from "styled-components"
import {flexCenter} from "../styles/theme"
import githubIcon from "../assets/images/icon-github.png"
import instagramIcon from "../assets/images/icon-instagram.png"
const Footer = () => {
	return (
		<Wrapper>
			<div className="icon-sns">
				<span>
					<a
						className="icon"
						href="https://github.com/hyosin-Jang"
						target="_blank">
						<img
							src={githubIcon}
							alt="icon-github"
							className="icon"
						/>
					</a>
				</span>
				<span>
					<a
						className="icon"
						href="https://www.instagram.com/cdnnnnl/"
						target="_blank">
						<img
							src={instagramIcon}
							alt="icon-github"
							className="icon"
						/>
					</a>
				</span>
			</div>
			<div className="copyright">Copyright @2023. Hyosin All rights reserved</div>
		</Wrapper>
	)
}

export default Footer

const Wrapper = styled.section`
	${flexCenter}
	background-color: black;
	color: white;
	padding: 5rem 0 3rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.icon-sns {
		display: flex;
		gap: 3rem;
		.icon {
			width: 3rem;
			height: 3rem;
		}
	}
`
