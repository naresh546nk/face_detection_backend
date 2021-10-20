import connection from "../db.config.js";
import Sequelize from 'sequelize'
import bcrypt from 'bcrypt'


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


Login.beforeCreate(async(login) =>{
        if (login.password) {
            login.password =await bcrypt.hashSync(login.password,10); //second paramerter is solt round.
        }
});
Login.beforeUpdate(async(login) =>{
    if (login.password) {
        login.password =await bcrypt.hashSync(login.password, 10); //second paramerter is solt round.
    }
})

//$2b$10$O.AJ/xFx9p0ES0x02chdOebQN6oYMg9KCodMpKMI0r22oAGOIX4CO
//ord` = '$2b$10$FS4i5fA9qODGxcExjwiWbu8NC/pwFCaz6b17cBWk4kbDlq0xBfqkK';


export default Login;