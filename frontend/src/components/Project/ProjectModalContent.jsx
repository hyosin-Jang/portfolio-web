import {useEffect, useState} from "react"
import Comment from "./Comment"
import {getProjectDetail, postView, postLike} from "../../api/projects"
import styled from "styled-components"

const ProjectModalContent = ({projectId}) => {
	const [projectDetail, setProjectDetail] = useState()

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
	}, [])

	//const {projectName, duration, stack, view, like, comment} = projectDetail

	return (
		<Wrapper>
			{projectDetail && (
				<>
					<div className="project-name">{projectDetail.project_name}</div>
					<div className="duration">
						<span>기간</span>
						<span>
							{projectDetail.start_date} - {projectDetail.end_date}
						</span>
					</div>
					<div className="stack">
						<span>스택</span>
						{projectDetail.Stacks.length > 0 && projectDetail.Stacks.map((s) => <span key={s.stack_id}>{s.stack_name}</span>)}
					</div>
					<div className="duration">
						<span>링크</span>
						<span>{projectDetail.link}</span>
					</div>
					<div className="duration">
						<span>조회수</span>
						<span>{projectDetail.view}</span>
						<span>좋아요</span>
						<button type="button">좋아요 버튼</button>
						{/*<span>{projectDetail.Like}</span>*/}
					</div>
					{/*TODO: 프로젝트 이미지 슬라이더 추가 */}
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
