import React, {useEffect, useState} from "react"
import Modal from "../Modal"
import {postComment, getComments, deleteComment} from "../../api/projects"
import {useInput} from "../../hooks/useInput"

import styled from "styled-components"

const Comment = ({projectId}) => {
	const [comments, setComments] = useState()
	const [isOpen, toggleModalOpen] = useState(false)
	const [deleteCommentId, setDeleteCommentId] = useState()

	const handleModal = (e) => {
		e.preventDefault()
		setDeleteCommentId(e.target.id)
		toggleModalOpen((prev) => !prev)
	}

	const name = useInput("")
	const password = useInput("")
	const content = useInput("")

	const passwordConfirm = useInput("")

	const handleDeleteComment = async (e) => {
		e.preventDefault()

		try {
			let data = await deleteComment(deleteCommentId, passwordConfirm.value)
			if (data) {
				if (data.status === 202) {
					alert("이미 삭제된 댓글이거나 비밀번호가 틀렸습니다!")
				}
				if (data.status === 200) {
					alert("삭제 처리되었습니다!")
					toggleModalOpen((prev) => !prev)
					setDeleteCommentId()
				}
			}
		} catch (e) {}
		e.target.reset()
	}

	const getCommentList = async () => {
		try {
			let data = await getComments(projectId)
			if (data) {
				setComments(data)
			}
		} catch (e) {}
	}

	useEffect(() => {
		getCommentList()
	}, [deleteCommentId])

	const submitComment = async (e) => {
		e.preventDefault()

		if (!name.value.trim() || !content.value.trim() || !password.value.trim()) {
			alert("공백 제거하고 입력해주세요")
			e.target.reset()
			return
		}

		let body = {
			name: name.value,
			content: content.value,
			password: password.value,
		}
		try {
			let data = await postComment(projectId, body)
			if (data) {
				setComments([...comments, data])
			}
		} catch {}
		e.target.reset()
	}

	return (
		<Wrapper>
			<Modal
				onClose={handleModal}
				isOpen={isOpen}>
				<form onSubmit={handleDeleteComment}>
					삭제하려면 비밀번호를 입력해주세요
					<input
						type="password"
						onChange={passwordConfirm.handleValue}
						required
					/>
					<button type="submit">삭제</button>
					<button onClick={handleModal}>취소</button>
				</form>
			</Modal>

			<form onSubmit={submitComment}>
				<div className="comment-title">댓글</div>
				<div className="comment-info">
					{comments &&
						comments.map((c) => (
							<StyledComment key={c.comment_id}>
								<div className="comment-row">
									<span className="comment-user">{c.name}</span>
									<span className="comment-created-at">{c.created_at}</span>
								</div>
								{/*<hr style={{color: "red", height: "2px", borderStyle: "dotted"}} />*/}
								<div className="comment-row">
									<span className="comment-content">{c.comment}</span>
									<button
										type="button"
										className="button-comment-delete"
										id={c.comment_id}
										onClick={handleModal}>
										❎
									</button>
								</div>
							</StyledComment>
						))}
					<div className="input-wrapper">
						<div className="input-row">
							<input
								type="text"
								placeholder="Name"
								onChange={name.handleValue}
								required
							/>
							<input
								type="password"
								placeholder="Password"
								onChange={password.handleValue}
								required
							/>
						</div>
						<div className="input-row">
							<textarea
								type="text"
								placeholder="여러분의 소중한 댓글을 입력해주세요"
								onChange={content.handleValue}
								required
							/>
							<button
								className="button-submit"
								type="submit">
								작성
							</button>
						</div>
					</div>
				</div>
			</form>
		</Wrapper>
	)
}

export default React.memo(Comment)

const Wrapper = styled.div`
	margin-top: 1.1rem;
	.input-wrapper {
		position: absolute;
		bottom: 3rem;

		.input-row {
			display: flex;
			gap: 1rem;
			width: 100%;

			& + .input-row {
				margin-top: 0.8rem;
			}
			textarea {
				width: 40rem;
				height: 3rem;
			}

			.button-submit {
				margin-left: 9rem;
				background-color: green;
				border-radius: 2rem;
				color: white;
				width: 5rem;
				&:hover {
					background-color: darkgreen;
					transition: background-color 0.5s ease-out;
				}
			}
		}
	}

	.comment-title {
		margin-left: 0.8rem;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.comment-info {
		height: 17rem;
		padding: 2rem;
		overflow-y: auto;
	}
`

const StyledComment = styled.div`
	display: flex;
	flex-direction: column;

	& + & {
		margin-top: 1.1rem;
	}

	.comment-row {
		display: flex;
		justify-content: space-between;

		.comment-user {
			font-size: 1.2rem;
			font-weight: 600;
		}
		.comment-created-at {
		}
	}
`
