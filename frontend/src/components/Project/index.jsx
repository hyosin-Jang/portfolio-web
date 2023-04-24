import {useEffect, useState} from "react"

import ProjectCard from "./ProjectCard"

import {getProjects, getProjectImages} from "../../api/projects"
import {useSetRecoilState} from "recoil"
import {projectStacks} from "../../utils/atom"

import styled from "styled-components"

const Project = () => {
	const [projects, setProjects] = useState()
	const [projectImages, setProjectImages] = useState()

	const setProjectStacks = useSetRecoilState(projectStacks)
	const getProjectImagesList = async () => {
		try {
			let data = await getProjectImages()
			if (data) {
				setProjectImages(data)
			}
		} catch {}
	}

	const getProjectList = async () => {
		try {
			let data = await getProjects()
			if (data) {
				setProjects(data)
				setProjectStacks(data)
			}
		} catch {}
	}
	useEffect(() => {
		getProjectList()
		getProjectImagesList()
	}, [])

	return (
		<Wrapper>
			<h1 className="title">Project</h1>
			<section className="project-content">
				<div className="box-wrapper">
					{projects &&
						projects.map((data) => (
							<ProjectCard
								key={data.project_id}
								image={projectImages[data.project_id - 1]}
								{...data}
							/>
						))}
				</div>
			</section>
		</Wrapper>
	)
}

export default Project

const Wrapper = styled.div`
	display: flex;
	padding: 10rem 10rem;
	flex-direction: column;

	.title {
		font-size: 3rem;
		padding-bottom: 2rem;
	}

	.box-wrapper {
		display: flex;
		flex-direction: column;
		gap: 7rem;
	}
`
