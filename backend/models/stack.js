const Sequelize = require("sequelize")

module.exports = class Stack extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				stack_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				stack_name: {
					type: Sequelize.STRING(16),
				},
			},
			{
				sequelize,
				timestamps: false,
				modelName: "Stack",
				tableName: "stack",
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		)
	}
	static associate(db) {
		db.Stack.belongsToMany(db.Project, {through: "ProjectStack", foreignKey: "stack_id"})
	}
}
