const dummy = require("./dummy")
const express = require("express")
const router = express.Router()

// GET view - 조회수 가지고 올 때 사용
router.get("/:projectId", (req, res) => {
	res.send(dummy.view)
})

// POST view - 조회수 +1
router.post("/:projectId", (req, res) => {
	// 등록
	// 업데이트된 결과 반환
	res.send(dummy.view)
})

module.exports = router
