import React, {useEffect, useState} from "react"
import Comment from "./Comment"
import {getProjectDetail, getProjectDetailImage, postView, postLike} from "../../api/projects"
import styled from "styled-components"
import {theme} from "../../styles/theme"
import Slider from "./Slider"

const ProjectModalContent = ({projectId}) => {
	const [projectDetail, setProjectDetail] = useState()
	const [projectDetailImages, setProjectDetailImages] = useState()

	const getProjectImage = async () => {
		try {
			let data = await getProjectDetailImage(projectId)
			if (data) {
				console.log("detail images data", data)
				setProjectDetailImages(data)
			}
		} catch {}
	}

	const getProject = async () => {
		try {
			let data = await getProjectDetail(projectId)
			if (data) {
				console.log("detail data", data)
				setProjectDetail(data)
			}
		} catch {}
	}
	useEffect(() => {
		getProject()
		getProjectImage()
	}, [])

	//const {projectName, duration, stack, view, like, comment} = projectDetail

	return (
		<Wrapper>
			{projectDetail && (
				<>
					<div className="project-name">{projectDetail.project_name}</div>
					<div className="project-data">
						<Slider images={projectDetailImages} />
						<div className="project-info">
							<div className="project-row">
								<Box className="wrap">
									<div className="box-title">기간</div>
									<div className="box-content">
										{projectDetail.start_date} ~ <br />
										{projectDetail.end_date}
									</div>
								</Box>
								<Box className="wrap">
									<div className="box-title">스택</div>
									<div className="box-content wrap">
										{projectDetail.Stacks.length > 0 &&
											projectDetail.Stacks.map((s) => (
												<span
													key={s.stack_id}
													className="stack">
													{s.stack_name}
												</span>
											))}
									</div>
								</Box>
								<Box>
									<div className="box-title">링크</div>
									<div className="box-content link wrap">
										<a
											className="link"
											href={`${projectDetail.link}`}
											target="_blank">
											Click here!
										</a>
									</div>
								</Box>
							</div>
							<div className="project-row">
								<Box className="last-child description">
									<div className="box-title">프로젝트 설명</div>
									<div className="box-content"> {projectDetail.description}</div>
								</Box>
								<Box className="view">
									<div className="box-title">조회수</div>
									<div className="box-content"> {projectDetail.view}</div>
								</Box>
							</div>
						</div>
					</div>

					<Comment
						projectId={projectId}
						comment={projectDetail.Comments}
					/>
				</>
			)}
		</Wrapper>
	)
}

export default React.memo(ProjectModalContent)

const Wrapper = styled.div`
	padding: 2rem;

	.project-name {
		text-align: center;
		font-size: 2rem;
		font-weight: 800;
	}

	.project-data {
		display: flex;
		.project-info {
			display: flex;
			flex-direction: column;

			.project-row {
				display: flex;
			}
		}
	}
`

const Box = styled.div`
	background-color: ${theme.colors.lightGrey};
	padding: 1rem;
	border-radius: 1.6rem;
	max-width: 10rem;
	margin: 0.5rem;
	display: flex;
	flex: 1;
	flex-direction: column;
	line-height: 1.5;
	margin-top: 1rem;

	&.view {
		max-width: 5rem;
	}

	.box-title {
		margin-left: 0.8rem;
		font-size: 1.2rem;
		font-weight: 700;
	}
	.box-content {
		height: 100%;
		max-width: 30rem;
		text-align: center;
		color: ${theme.colors.drakGrey};
		font-weight: 600;
		margin-top: 0.1rem;
		border-radius: 2rem;

		display: flex;
		justify-content: center;
		align-items: center;
		display: inline-block;

		.stack {
			margin-right: 0.2rem;
			border-radius: 1.25rem;
			padding: 0 0.2rem;
			display: inline-block;
		}

		.wrap {
			word-wrap: break-word;
			overflow-wrap: break-word;
		}

		.link {
			color: ${theme.colors.drakGrey};

			&:active {
				color: white;
			}

			&:hover {
				color: ${theme.colors.lightPurple};
				transition: color 0.3s ease-out;
			}
		}
	}

	.link {
		max-width: 5rem;
		display: inline-block;
	}

	.wrap {
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	&.description {
		max-width: 30rem;
		flex: 2;
	}
`
