const dummy = require("./dummy")

// console.log("dummy", dummy.projectArrayDummy, dummy.projectDummy)

const express = require("express")

const router = express.Router()

// GET project
router.get("/", (req, res) => {
	res.send(dummy.projectArrayDummy)
})

router.get("/:projectId", (req, res) => {
	res.send(dummy.projectDummy)
})

module.exports = router
