import connection from "../db.config.js";
import Sequelize from 'sequelize'


const Login=connection.define("login",{
    email: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true,
        validate : {
            isEmail: true
            }
	  },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    }
})
export default Login;