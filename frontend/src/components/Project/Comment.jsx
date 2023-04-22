import React, {useEffect, useState} from "react"
import {postComment} from "../../api/projects"
import styled from "styled-components"

const Comment = ({comment}) => {
	const [comments, setComments] = useState()

	useEffect(() => {
		// 처음 한번만 읽기전용 값(props)으로 설정
		setComments(comment)
	}, [])

	const submitComment = async (e) => {
		e.preventDefault()

		let projectId = 2
		let body = {
			name: "효신",
			comment: "댓글 내용",
		}
		try {
			let data = await postComment(projectId, body)
			if (data) {
				console.log("comments data", data)
				setComments(data)
			}
		} catch {}
	}

	return (
		<Wrapper className="comment">
			<form onSubmit={submitComment}>
				<span>댓글</span>
				{comments &&
					comments.map((c) => (
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
		</Wrapper>
	)
}

export default React.memo(Comment)

const Wrapper = styled.div``
