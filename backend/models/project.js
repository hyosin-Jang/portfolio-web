const Sequelize = require("sequelize")

module.exports = class Project extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				project_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				project_name: {
					type: Sequelize.STRING(255),
				},
				start_date: {
					type: Sequelize.DATE,
				},
				end_date: {
					type: Sequelize.DATE,
				},
				description: {
					type: Sequelize.STRING(255),
				},
				link: {
					type: Sequelize.STRING(255),
				},
				view: {
					type: Sequelize.INTEGER,
				},
				fk_project_thumb_url: {
					type: Sequelize.STRING(255),
				},
			},
			{
				sequelize,
				timestamps: false,
				modelName: "Project",
				tableName: "project",
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		)
	}
	static associate(db) {
		// 1:N
		db.Project.hasMany(db.Comment, {foreignKey: "fk_project_id", sourceKey: "project_id"})

		// N:M
		db.Project.belongsToMany(db.Stack, {through: "ProjectStack", foreignKey: "project_id"})
	}
}
