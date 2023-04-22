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
	background-color: grey;
	opacity: 0.1;
	z-index: 20;
`

// 모달창 내용
const ModalContent = styled.div`
	z-index: 30;
	background-color: white;
	position: fixed;
	top: calc(50% - 20rem);
	left: calc(50% - 20rem);
	width: 40rem;
	height: 40rem;
`