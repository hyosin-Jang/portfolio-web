import {useState, useEffect} from "react"

import Header from "../components/Header"
import Aboutme from "../components/Aboutme"
import WhoamI from "../components/WhoamI"
import Stack from "../components/Stack"
import Project from "../components/Project"
import Footer from "../components/Footer"

import {getStacks} from "../api/projects"

import styled from "styled-components"

const Home = () => {
	const [stacks, setStacks] = useState()

	const getStack = async () => {
		try {
			let data = await getStacks()
			if (data) {
				setStacks(data)
			}
		} catch {}
	}
	useEffect(() => {
		getStack()
	}, [])

	return (
		<Wrapper>
			<Header />
			<Aboutme />
			<WhoamI />
			{stacks && <Stack stacks={stacks} />}
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
	max-width: 100vw;
	height: calc(100vh - 60px);
	margin-top: 60px;
`
