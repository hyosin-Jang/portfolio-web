import {useEffect, useState} from "react"

import ProjectCard from "./ProjectCard"
import ProjectIcon from "../../assets/images/icon-project-sample.png"
import styled from "styled-components"
import {getProjects} from "../../api/projects"

const Project = () => {
	const [projects, setProjects] = useState()

	const getProjectList = async () => {
		try {
			let data = await getProjects()
			if (data) {
				console.log("data", data)
				setProjects(data)
			}
		} catch {}
	}
	useEffect(() => {
		getProjectList()
	}, [])

	return (
		<Wrapper>
			<h1 className="title">Project</h1>
			<section className="project-content">
				<div className="box-wrapper">
					{projects &&
						projects.map((data) => (
							<ProjectCard
								key={data.projectId}
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

const dummy = [
	{
		id: 1,
		projectName: "Babyak",
		stack: ["Javascript", "Node.js", "MySQL"],
		description: "교내 웹 프로젝트로 어떠어떠하게 해서 이러이러한 결과를 얻었습니다.(OKR)",
		projectIcon: ProjectIcon,
	},
	{
		id: 2,
		projectName: "Babyak",
		stack: ["Javascript", "Node.js", "MySQL"],
		description: "교내 웹 프로젝트로 어떠어떠하게 해서 이러이러한 결과를 얻었습니다.(OKR)",
		projectIcon: ProjectIcon,
	},
	{
		id: 3,
		projectName: "Babyak",
		stack: ["Javascript", "Node.js", "MySQL"],
		description: "교내 웹 프로젝트로 어떠어떠하게 해서 이러이러한 결과를 얻었습니다.(OKR)",
		projectIcon: ProjectIcon,
	},
	{
		id: 4,
		projectName: "Babyak",
		stack: ["Javascript", "Node.js", "MySQL"],
		description: "교내 웹 프로젝트로 어떠어떠하게 해서 이러이러한 결과를 얻었습니다.(OKR)",
		projectIcon: ProjectIcon,
	},
	{
		id: 5,
		projectName: "Babyak",
		stack: ["Javascript", "Node.js", "MySQL"],
		description: "교내 웹 프로젝트로 어떠어떠하게 해서 이러이러한 결과를 얻었습니다.(OKR)",
		projectIcon: ProjectIcon,
	},
]
