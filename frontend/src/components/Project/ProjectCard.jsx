import {useState} from "react"

import Modal from "../Modal"
import ProjectModalContent from "./ProjectModalContent"
import ScrollSlideAnimation from "../ScrollSlideAnimation"

import styled from "styled-components"
import {theme} from "../../styles/theme"

const ProjectCard = ({image, Stacks, description, project_id, project_name}) => {
	const [isOpen, toggleOpen] = useState(false)
	const onClose = () => toggleOpen((prev) => !prev)

	return (
		<Wrapper>
			<ScrollSlideAnimation>
				<Modal
					isOpen={isOpen}
					onClose={onClose}>
					<ProjectModalContent projectId={project_id} />
				</Modal>
				<div className="project-wrapper">
					{image && (
						<img
							onClick={onClose}
							className="app-icon"
							src={image.data}
							alt="app-icon"
						/>
					)}

					<div className="project-data">
						<div className="project-name">{project_name}</div>
						<div className="project-stack">
							{Stacks &&
								Stacks.map((s) => (
									<span
										key={s.stack_id}
										className="stack">
										{s.stack_name}
									</span>
								))}
						</div>
						<div className="project-description">{description}</div>
					</div>
				</div>
			</ScrollSlideAnimation>
		</Wrapper>
	)
}

export default ProjectCard

const Wrapper = styled.div`
	display: flex;
	min-height: 40rem;

	.project-wrapper {
		display: flex;

		.app-icon {
			width: 10rem;
			height: 10rem;
			border-radius: 4rem;
			border: 2px solid ${theme.colors.grey};
			cursor: pointer;
			display: inline-block;
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
				}
			}
			.project-description {
				font-size: 1.5rem;
			}
		}
	}
`
