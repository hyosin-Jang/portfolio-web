import Header from "../components/Header"
import Aboutme from "../components/Aboutme"
import WhoamI from "../components/WhoamI"
import Stack from "../components/Stack"
import Project from "../components/Project"
import Footer from "../components/Footer"

import styled from "styled-components"
import {flexCenter} from "../styles/theme"
import ScrollSlideAnimation from "../components/ScrollSlideAnimation"

const Home = () => {
	return (
		<Wrapper>
			<Header />
			<Aboutme />
			<ScrollSlideAnimation>
				<WhoamI />
			</ScrollSlideAnimation>
			<ScrollSlideAnimation>
				<Stack />
			</ScrollSlideAnimation>
			<Project />
			<Footer />
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.main`
	display: flex;
	margin: auto;
	flex-direction: column;
	max-width: 80rem;
	background-color: pink;
	height: calc(100vh - 60px);
	margin-top: 60px;
`
