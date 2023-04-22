import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const Modal = ({isOpen, onClose, children}) => {
	const [modalNode, setModalNode] = useState(null)

	useEffect(() => {
		const el = document.createElement("div")
		setModalNode(el)
		document.body.appendChild(el)
		return () => {
			document.body.removeChild(el)
		}
	}, [])

	if (!isOpen || !modalNode) return null

	return ReactDOM.createPortal(
		<>
			<Overlay onClick={onClose}></Overlay> {/** 바탕 누르면 꺼짐 */}
			<ModalContent className="modal">{children}</ModalContent>
		</>,
		modalNode
	)
}

export default Modal

// 모달창 배경
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.5;
	z-index: 20;
	transition: opacity 2s ease-in-out 0.2s, background-color 2s ease-in-out 0.2s;
`

// 모달창 내용
const ModalContent = styled.div`
	z-index: 30;
	background-color: white;
	position: fixed;
	top: calc(50% - 30rem);
	left: calc(50% - 30rem);
	width: 60rem;
	height: 60rem;
	box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

	border-radius: 23px;
	transition: all 4s ease-in-out 0.5s;
`
