const Sequelize = require("sequelize")

module.exports = class View extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				view_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				created_at: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.NOW,
				},
				count: {
					type: Sequelize.INTEGER,
					defaultValue: 0,
				},
				fk_view_project_id: {
					type: Sequelize.INTEGER,
				},
			},
			{
				sequelize,
				timestamps: false,
				modelName: "View",
				tableName: "view",
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		)
	}
	static associate(db) {
		db.View.belongsTo(db.Project, {foreignKey: "fk_view_project_id", targetKey: "project_id"})
	}
}
