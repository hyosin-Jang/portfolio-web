const Sequelize = require("sequelize")

module.exports = class Project extends Sequelize.Model {
	// 테이블에 대한 설정
	// - 첫번쩨 인자: 테이블에 대한 설정
	// - 두번째 인자: 테이블 자체에 대한 설정
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
				fk_project_thumb_url: {
					type: Sequelize.STRING(255),
				},
			},
			{
				sequelize,
				timestamps: false, // true면 자동으로 createdAt, updatedAt 컬럼 추가
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
		db.Project.hasMany(db.Photo, {foreignKey: "fk_photo_project_id", sourceKey: "project_id"})

		// 1:1
		db.Project.hasOne(db.View, {foreignKey: "fk_view_project_id", sourceKey: "project_id"})
		db.Project.hasOne(db.Like, {foreignKey: "fk_like_project_id", sourceKey: "project_id"})

		// N:M
		db.Project.belongsToMany(db.Stack, {through: "ProjectStack", foreignKey: "project_id"})
	}
}
