const Comment = require("../models/comment")

const express = require("express")
const router = express.Router()

// POST /comment
router.post("/:projectId", async (req, res) => {
	const projectId = req.params.projectId
	const {name, content, password} = req.body

	try {
		const comment = await Comment.create({
			fk_project_id: projectId,
			name: name,
			comment: content,
			password: password,
		})
		res.status(201).json(comment)
	} catch (err) {
		console.error(err)
		next(err)
	}
})

// GET /comment/:projectId
router.get("/:projectId", async (req, res) => {
	const projectId = req.params.projectId

	try {
		const comments = await Comment.findAll({
			where: {
				fk_project_id: projectId,
			},
		})
		res.status(201).json(comments)
	} catch (err) {
		console.error(err)
		next(err)
	}
})

// DELETE /comment/:commentId/:password
router.delete("/:commentId/:password", async (req, res) => {
	const {commentId, password} = req.params

	try {
		const comments = await Comment.destroy({
			where: {
				comment_id: commentId,
				password: password,
			},
		})

		if (!comments) {
			let result = {
				status: 202,
				deleteRows: comments,
			}
			res.status(202).json(result)
		} else {
			let result = {
				status: 200,
				deleteRows: comments,
			}
			res.status(201).json(result)
		}
	} catch (err) {
		console.error(err)
		next(err)
	}
})

module.exports = router
