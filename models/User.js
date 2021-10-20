
import Sequelize from 'sequelize'
import connection from "../db.config.js";

const User=connection.define('user', {
    id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  name: {
		type: Sequelize.STRING,
		allowNull:false
	  },
	  email: {
        type: Sequelize.STRING,
        unique: true,
        validate : {
            isEmail: true
            }
	  },
	  gender: {
          type: Sequelize.STRING,
          validate: {
            isIn:  [['Male','Female']]
          }

      },
      entries:{
          type: Sequelize.INTEGER

      }
	});
	
export default User;