const dummy = require("./dummy")
const express = require("express")
const router = express.Router()

// GET comment - 댓글 정보만 조회할 때 사용
router.get("/:projectId", (req, res) => {
	res.send(dummy.comment)
})

// POST comment - 댓글 등록
router.post("/:projectId", (req, res) => {
	// 등록
	// 업데이트된 결과 반환
	res.send(dummy.comment)
})

module.exports = router
