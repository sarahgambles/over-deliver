const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    provider_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'provider',
            key: 'id'
        }
    }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review' 
});

module.exports = Review;