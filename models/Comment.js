const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {
}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'posts',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        frezzeTableName: true,
        timestamps: true,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports = Comment;



















// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Comment extends Model {}

// Comment.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         comment_text: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 // this means the password must be at least four characters
//                 len: [1]
//             }
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id'
//             }
//         },
//         post_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'post',
//                 key: 'id'
//             }
//         },
//     },
//     {
//         sequelize,
//         frezzeTableName: true,
//         timestamps: true,
//         underscored: true,
//         modelName: 'comment'
//     }
// );

// module.exports = Comment;