const Sequelize = require("sequelize")

module.exports = class Photo extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				photo_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				thumb_url: {
					type: Sequelize.STRING(255),
				},
				original_url: {
					type: Sequelize.STRING(255),
				},
				filename: {
					type: Sequelize.STRING(255),
				},
				fk_photo_project_id: {
					type: Sequelize.INTEGER,
				},
			},
			{
				sequelize,
				timestamps: false,
				modelName: "Photo",
				tableName: "photo",
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		)
	}
	static associate(db) {
		db.Photo.belongsTo(db.Project, {foreignKey: "fk_photo_project_id", targetKey: "project_id"})
	}
}
