const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || "development"
const config = require("../config/config")[env]

const Project = require("./project")
const Comment = require("./comment")
const Stack = require("./stack")
const ProjectStack = require("./project_stack")
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: "localhost",
	dialect: "mysql",
})

db.sequelize = sequelize

db.Project = Project
db.Comment = Comment
db.Stack = Stack
db.ProjectStack = ProjectStack

Project.init(sequelize)
Comment.init(sequelize)
Stack.init(sequelize)
ProjectStack.init(sequelize)

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

module.exports = db
