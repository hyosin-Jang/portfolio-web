const Sequelize = require("sequelize")

module.exports = class ProjectStack extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				project_stack_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				project_id: {
					type: Sequelize.INTEGER,
				},
				stack_id: {
					type: Sequelize.INTEGER,
				},
			},
			{
				sequelize,
				timestamps: false,
				modelName: "ProjectStack",
				tableName: "project_stack",
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		)
	}
	static associate(db) {
		// project와 stack을 하나씩 가져와서 연결
		db.ProjectStack.belongsTo(db.Project, {foreignKey: "project_id"})
		db.ProjectStack.belongsTo(db.Stack, {foreignKey: "stack_id"})
	}
}
