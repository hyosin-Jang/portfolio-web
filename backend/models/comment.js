const Sequelize = require("sequelize")

module.exports = class Comment extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				comment_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				name: {
					type: Sequelize.STRING(32),
				},
				comment: {
					type: Sequelize.TEXT,
				},
				password: {
					type: Sequelize.STRING(32),
				},
				created_at: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.NOW,
				},
				fk_project_id: {
					type: Sequelize.INTEGER,
				},
			},
			{
				sequelize,
				timestamps: false,
				modelName: "Comment",
				tableName: "comment",
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		)
	}
	static associate(db) {
		db.Comment.belongsTo(db.Project, {foreignKey: "fk_project_id", targetKey: "project_id"})
	}
}
