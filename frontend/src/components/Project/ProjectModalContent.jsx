import {useEffect, useState} from "react"
import Comment from "./Comment"
import {getProjectDetail, postView, postLike} from "../../api/projects"
import styled from "styled-components"

const ProjectModalContent = () => {
	const [projectDetail, setProjectDetail] = useState()

	const getProject = async () => {
		let projectId = 2
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
	}, [])

	//const {projectName, duration, stack, view, like, comment} = projectDetail

	return (
		<Wrapper>
			{projectDetail && (
				<>
					<div className="project-name">{projectDetail.projectName}</div>
					<div className="duration">
						<span>기간</span>
						<span>duration</span>
					</div>
					<div className="stack">
						<span>스택</span>
						{projectDetail.stack.map((s) => (
							<span key={s.stackId}>{s.stackName}</span>
						))}
					</div>
					<div className="duration">
						<span>기간</span>
						<span>{projectDetail.duration}</span>
					</div>
					<div className="duration">
						<span>조회수</span>
						<span>{projectDetail.view}</span>
						<span>좋아요</span>
						<button type="button">좋아요 버튼</button>
						<span>{projectDetail.like}</span>
					</div>
					{/*TODO: 프로젝트 이미지 슬라이더 추가 */}
					<Comment comment={projectDetail.comment} />
				</>
			)}
		</Wrapper>
	)
}

export default ProjectModalContent

const Wrapper = styled.header``

const dummy = {
	projectName: "밥약",
	duration: "2023.1 ~2023.4",
	stack: [
		{
			stackId: 1,
			stackName: "javascript",
		},
		{
			stackId: 2,
			stackName: "mysql",
		},
		{
			stackId: 3,
			stackName: "nodejs",
		},
		{
			stackId: 4,
			stackName: "sass",
		},
	],
	view: 2, // 조회수
	like: 10, // 좋아요
	comment: [
		{
			commentId: 1,
			comment: "우와~~~",
			created_at: "2023.04.21 12:39:00",
			name: "익명1",
		},
		{
			commentId: 2,
			comment: "우와~~잘보고갑니다~",
			created_at: "2023.04.21 12:39:00",
			name: "익명의사용자",
		},
		{
			commentId: 3,
			comment: "우와~~잘보고갑니다~",
			created_at: "2023.04.21 12:39:00",
			name: "하하하",
		},
		{
			commentId: 4,
			comment: "우와~~잘보고갑니다~",
			created_at: "2023.04.21 12:39:00",
			name: "야생의융콘",
		},
	],
}
