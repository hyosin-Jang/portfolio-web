import React, {useEffect, useState, useRef} from "react"

// components & hooks
import Modal from "../Modal"
import {useInput} from "../../hooks/useInput"
import {getParsedDate} from "../../utils/getParsedDate"

// api
import {postComment, getComments, deleteComment} from "../../api/projects"

// style
import styled from "styled-components"
import {theme, submitButton, flexCenter, formInput} from "../../styles/theme"
import deleteIcon from "../../assets/images/icon-delete.png"

const Comment = ({projectId}) => {
	const [comments, setComments] = useState()
	const [isOpen, toggleModalOpen] = useState(false)
	const [deleteCommentId, setDeleteCommentId] = useState()

	const scrollRef = useRef(null)
	const name = useInput("")
	const password = useInput("")
	const content = useInput("")
	const passwordConfirm = useInput("")

	const handleModal = (e) => {
		e.preventDefault()
		setDeleteCommentId(e.target.id)
		toggleModalOpen((prev) => !prev)
	}

	const scrollToBottom = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight
		}
	}

	useEffect(() => {
		scrollToBottom()
	}, [comments])

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
			alert("공백을 제거하고 입력해주세요")
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
				<RemoveModalForm onSubmit={handleDeleteComment}>
					<div className="modal-title">삭제하려면 비밀번호를 입력해주세요</div>

					<Input
						type="password"
						placeholder="password"
						onChange={passwordConfirm.handleValue}
						required
					/>
					<div className="modal-control">
						<button
							type="submit"
							className="button-submit">
							삭제
						</button>
						<button
							className="button-submit button-white"
							onClick={handleModal}>
							취소
						</button>
					</div>
				</RemoveModalForm>
			</Modal>

			<form onSubmit={submitComment}>
				<div className="comment-title">댓글</div>
				<div
					className="comment-info"
					ref={scrollRef}>
					{comments &&
						comments.map((c) => (
							<StyledComment key={c.comment_id}>
								<div className="first-column">
									<div className="comment-row">
										<span className="comment-user">{c.name}</span>
									</div>
									<div className="comment-row">
										<span className="comment-content">{c.comment}</span>
									</div>
								</div>
								<div className="second-column">
									<div className="comment-created-at">{getParsedDate(c.created_at)}</div>
									<button
										type="button"
										className="button-comment-delete"
										id={c.comment_id}
										onClick={handleModal}>
										<img
											className="icon-delete"
											src={deleteIcon}
											alt="icon-delete"
										/>
									</button>
								</div>
							</StyledComment>
						))}
					<div className="input-wrapper">
						<div className="input-row">
							<Input
								className="input-small"
								maxLength="10"
								type="text"
								placeholder="Name"
								onChange={name.handleValue}
								required
							/>
							<Input
								className="input-small"
								type="password"
								placeholder="Password"
								maxLength="20"
								onChange={password.handleValue}
								required
							/>
						</div>
						<div className="input-row">
							<Input
								className="input-big"
								type="text"
								maxLength="200"
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

const Input = styled.input`
	${formInput}

	&.input-small {
		max-width: 15rem;
	}

	&.input-big {
		width: 34rem;
	}
`

const RemoveModalForm = styled.form`
	${flexCenter}
	flex-direction: column;
	height: 100%;
	padding: 0 2rem;
	gap: 2rem;

	.modal-title {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 4rem;
	}

	input {
		width: 22rem;
		height: 2rem;
		border-radius: 1rem;
		margin-bottom: 2rem;
	}

	.modal-control {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 20rem;
		font-size: 1.5rem;
		.button-submit {
			${submitButton}

			&.button-white {
				background-color: white;
				color: ${theme.colors.lightBlack};
				border: 1px solid ${theme.colors.borderGrey};
			}
		}
	}
`

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

			.button-submit {
				${submitButton}
				margin-left: 9rem;
				color: white;
				width: 5rem;
			}
		}
	}

	.comment-title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.comment-info {
		height: 17rem;
		padding: 2rem;
		overflow-y: auto;
	}
`

const StyledComment = styled.section`
	display: flex;
	.first-column {
		flex: 4;
	}
	.second-column {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex: 1;

		.comment-created-at {
			color: ${theme.colors.lightBlack};
		}

		.button-comment-delete {
			.icon-delete {
				width: 1rem;
				height: 1rem;
				border-radius: 1.6rem;

				&:hover {
					background-color: lightgrey;
					border-radius: 1.6rem;
					transition: background-color 0.5s ease-in-out;
				}
			}
		}
	}

	box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.08) 0px 2px 6px;
	padding: 10px 13px;
	overflow: hidden;
	background-color: rgb(255, 255, 255);
	border-radius: 18px;

	& + & {
		margin-top: 1.1rem;
	}

	.comment-row {
		display: flex;
		gap: 5px;

		.comment-user {
			font-size: 1.2rem;
			font-weight: 600;
			margin-bottom: 3px;
		}

		.comment-content {
			white-space: no-wrap;
		}
	}
`
