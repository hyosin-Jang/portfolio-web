import styled from "styled-components"

// 모달창 안에 들어가는 내용
// project:projectId로 최초 호출
// 그 이후에는 각각 업데이트

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

const handleSubmit = (e) => {
	e.preventDefault()
}

const ProjectModalContent = () => {
	const {projectName, duration, stack, view, like, comment} = dummy

	return (
		<Wrapper>
			<div className="project-name">{projectName}</div>
			<div className="duration">
				<span>기간</span>
				<span>duration</span>
			</div>
			<div className="stack">
				<span>스택</span>
				{stack && stack.map((s) => <span key={s.stackId}>{s.stackName}</span>)}
			</div>
			<div className="duration">
				<span>기간</span>
				<span>{duration}</span>
			</div>
			<div className="duration">
				<span>조회수</span>
				<span>{view}</span>
				<span>좋아요</span>
				<span>{like}</span>
			</div>
			{/*TODO: 프로젝트 이미지 슬라이더 추가 */}
			<div className="comment">
				<form onSubmit={handleSubmit}>
					<span>댓글</span>
					{comment &&
						comment.map((c) => (
							<div key={c.commentId}>
								<span>이름</span>
								<span>{c.name}</span>
								<span>내용</span>
								<span>{c.comment}</span>
								<span>작성일</span>
								<span>{c.created_at}</span>
							</div>
						))}
					<span>이름</span>
					<input placeholder="이름을 입력해주세요" />
					<span>댓글내용</span>
					<input placeholder="댓글을 입력해주세요" />
					<button type="submit">작성</button>
				</form>
			</div>
		</Wrapper>
	)
}

export default ProjectModalContent

const Wrapper = styled.header``
