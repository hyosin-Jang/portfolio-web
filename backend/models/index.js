const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || "development"
const config = require("../config/config")[env]

const Project = require("./project")
const Comment = require("./comment")
const Like = require("./like")
const View = require("./view")
const Photo = require("./photo")
const Stack = require("./stack")
const ProjectStack = require("./project_stack")
const db = {}

// mysql 연결 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: "localhost",
	dialect: "mysql",
})

// 연결 객체를 재사용하기 위함 (module exports를 하려고 db에 넣어놓음)
db.sequelize = sequelize

db.Project = Project
db.Comment = Comment
db.Like = Like
db.View = View
db.Photo = Photo
db.Stack = Stack
db.ProjectStack = ProjectStack

// 모델의 static, init 메서드 호출
Project.init(sequelize)
Comment.init(sequelize)
Like.init(sequelize)
View.init(sequelize)
Photo.init(sequelize)
Stack.init(sequelize)
ProjectStack.init(sequelize)

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})
/*
Project.associate(db)
Comment.associate(db)
Like.associate(db)
View.associate(db)
Photo.associate(db)
Stack.associate(db)
ProjectStack.associate(db)
*/

module.exports = db
