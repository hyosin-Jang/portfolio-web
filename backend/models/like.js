const Sequelize = require("sequelize")

module.exports = class Like extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				like_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				user_ip: {
					type: Sequelize.STRING(255),
				},
				liked_at: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.NOW,
				},
				count: {
					type: Sequelize.INTEGER,
					defaultValue: 0,
				},
				fk_like_project_id: {
					type: Sequelize.INTEGER,
				},
			},
			{
				sequelize,
				timestamps: false,
				modelName: "Like",
				tableName: "like",
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		)
	}
	static associate(db) {
		db.Like.belongsTo(db.Project, {foreignKey: "fk_like_project_id", targetKey: "project_id"})
	}
}
