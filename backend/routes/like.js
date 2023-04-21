const dummy = require("./dummy")
const express = require("express")
const router = express.Router()

// GET like - 좋아요 수 가지고 올 때 사용
router.get("/:projectId", (req, res) => {
	res.send(dummy.like)
})

// POST like - 좋아요 +1
router.post("/:projectId", (req, res) => {
	// 등록
	// 업데이트된 결과 반환
	res.send(dummy.like)
})

// DELETE like - 좋아요 -1
router.delete("/:projectId", (req, res) => {
	// 수 -1 (delete 메서드가 맞나??? post로 자원 변경하는거니까 취소하는 것도 post로 해도 될듯)
	// 업데이트된 결과 반환
	res.send(dummy.like)
})

module.exports = router
