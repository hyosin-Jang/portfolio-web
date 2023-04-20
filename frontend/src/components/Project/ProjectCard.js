import styled from "styled-components"
import ScrollSlideAnimation from "../ScrollSlideAnimation"

const ProjectCard = ({id, projectName, stack, description, projectIcon}) => {
	return (
		<Wrapper>
			<ScrollSlideAnimation>
				<img
					className="app-icon"
					src={projectIcon}
					alt="app-icon"
				/>
				<div className="project-data">
					<div className="project-name">{projectName}</div>
					<div className="project-stack">
						{stack &&
							stack.map((stackName, idx) => (
								<span
									key={idx}
									className="stack">
									{stackName}
								</span>
							))}
					</div>
					<div className="project-description">{description}</div>
				</div>
			</ScrollSlideAnimation>
		</Wrapper>
	)
}

export default ProjectCard

const Wrapper = styled.div`
	display: flex;
	min-height: 40rem;
	.app-icon {
		width: 10rem;
		height: 10rem;
		border-radius: 1.2rem;
	}

	.project-data {
		margin-left: 3rem;
		.project-name {
			font-size: 2rem;
			font-weight: 800;
			margin-bottom: 0.8rem;
		}
		.project-stack {
			display: flex;
			margin-bottom: 0.7rem;
			.stack {
				color: #c28eec;
				background: rgba(189, 66, 238, 0.212);
				border-radius: 1.25rem;
				padding: 0 0.6rem;
				margin-right: 0.5rem;
				display: flex;
				min-width: 2rem;
				justify-content: center;
				font-size: 1rem;
				line-height: 1.4rem;
				margin-right: 0.6rem;
			}
		}
		.project-description {
			font-size: 1.5rem;
		}
	}
`
