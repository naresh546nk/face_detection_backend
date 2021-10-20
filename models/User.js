
import Sequelize from 'sequelize'
import connection from "../db.config.js";

const User=connection.define('user', {
    id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1
	  },
	  name: {
		type: Sequelize.STRING,
		allowNull:false
	  },
	  email: {
        type: Sequelize.STRING,
		primaryKey: true,
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
          type: Sequelize.INTEGER,
          defaultValue:0

      }
	});
	
export default User;