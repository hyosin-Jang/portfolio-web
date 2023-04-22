const dummy = require("./dummy")
const Comment = require("../models/comment")

const express = require("express")
const router = express.Router()

// POST /comment - 댓글 등록
router.post("/:projectId", async (req, res) => {
	const projectId = req.params.projectId
	const {name, content} = req.body

	try {
		const comment = await Comment.create({
			fk_project_id: projectId,
			name: name,
			comment: content,
		})

		console.log("방금 만든 코멘트", comment)
		res.status(201).json(comment)
	} catch (err) {
		console.error(err)
		next(err)
	}
})

// GET /comment - 댓글 정보만 조회할 때 사용
router.get("/:projectId", async (req, res) => {
	const projectId = req.params.projectId

	try {
		const comments = await Comment.findAll({
			where: {
				fk_project_id: projectId,
			},
		})

		console.log("프로젝트 id로 comments 조회", comments)
		res.status(201).json(comments)
	} catch (err) {
		console.error(err)
		next(err)
	}
})

module.exports = router
