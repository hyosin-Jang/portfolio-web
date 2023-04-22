const db = require("../models")
const Project = require("../models/project")
const Stack = require("../models/stack")
const Comment = require("../models/comment")
const Like = require("../models/like")
const View = require("../models/view")
const Photo = require("../models/photo")

const express = require("express")
const router = express.Router()

// GET /project
// 프로젝트들을 가지고 오면서 스택 테이블 함께 조회
router.get("/", async (req, res) => {
	try {
		const projects = await Project.findAll({
			include: [
				{
					model: Stack,
					through: {attributes: []},
				},
			],
		})
		if (projects) {
			res.send(projects)
		}
	} catch {}
})

// GET /project/:projectId
// 해당 프로젝트 아이디를 가지고, 좋아요, 조회수, 댓글, 스택 (+사진) 함께 조회
router.get("/:projectId", async (req, res) => {
	const projectId = req.params.projectId

	// 쿠키에 해당 프로젝트의 조회 여부 저장
	const viewedProjects = req.signedCookies.viewedProjects || []
	const isViewed = viewedProjects.includes(projectId)

	if (!isViewed) {
		try {
			const viewUpdateProject = await Project.update(
				{
					view: db.sequelize.literal("view + 1"),
				},
				{
					where: {project_id: projectId},
				}
			)
			res.cookie("viewedProjects", [...viewedProjects, projectId], {maxAge: 86400, signed: true})
		} catch (err) {
			console.error(err)
		}
	}

	try {
		const project = await Project.findOne({
			where: {
				project_id: projectId,
			},
			include: [
				{
					model: Comment,
				},
				{
					model: Stack,
					through: {attributes: []},
				},
				{
					model: Like,
				},
				{
					model: View,
				},
			],
		})
		if (project) {
			res.send(project)
		}
	} catch {}
})

module.exports = router
