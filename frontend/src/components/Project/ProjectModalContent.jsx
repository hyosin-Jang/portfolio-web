import {useEffect, useState} from "react"
import Comment from "./Comment"
import {getProjectDetail, getProjectDetailImage, postView, postLike} from "../../api/projects"
import styled from "styled-components"
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
								<Box>
									<div className="box-title">기간</div>
									<div className="box-content">
										{projectDetail.start_date} - {projectDetail.end_date}
									</div>
								</Box>
								<Box>
									<div className="box-title">스택</div>
									<div className="box-content">{projectDetail.Stacks.length > 0 && projectDetail.Stacks.map((s) => <span key={s.stack_id}>{s.stack_name}</span>)}</div>
								</Box>
								<Box>
									<div className="box-title">링크</div>
									<div className="box-content">{projectDetail.link}</div>
								</Box>
								<Box>
									<div className="box-title">조회수</div>
									<div className="box-content"> {projectDetail.view}</div>
								</Box>
							</div>
							<div className="project-row">
								<Box className="last-child">
									<div className="box-title">프로젝트 설명</div>
									<div className="box-content"> {projectDetail.description}</div>
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

export default ProjectModalContent

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
	display: flex;
	flex: 1;
	flex-direction: column;
	line-height: 1.5;
	margin-top: 1rem;

	.box-title {
		margin-left: 0.8rem;
		font-size: 1.5rem;
		font-weight: 600;
	}
	.box-content {
		padding: 0.4rem;
		margin: 0.4rem;
		text-align: center;
		margin-top: 0.1rem;
		background-color: lightgrey;
		border-radius: 2rem;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`
