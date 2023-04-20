const checkIsInViewport = (el) => {
	if (!el || !window) return false

	// Element.getBoundingClientRect: element의 크기와 뷰포트 위치 정보 제공
	const {top: elementTop, bottom: elementBottom} = el.getBoundingClientRect()

	return elementBottom > 0 && elementTop <= window.innerHeight
}

export default checkIsInViewport
