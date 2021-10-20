import connection from './db.config.js'
import Express from 'express'
import bodyParser from 'body-parser'
import Router from './router/Router.js'
import User from './models/User.js';
import Login from './models/Login.js';


const app=Express()
app.use(bodyParser.json())
const parser=bodyParser.urlencoded({ extended: false })
app.use(parser);
const router=Router(app,parser)

const PORT=8081





connection.sync({alter: true}).then(() => {
	//console.log('Drop and Resync with { force: true }');
	console.log("data base will alter if any changed happened !")
	console.log("============================================================")
  });




User.hasOne(Login ,{foreignKey: 'fk_email' ,targetKey: 'email'})
Login.belongsTo(User , {foreignKey: 'fk_email' ,targetKey: 'email'})

// db.address.belongsTo(db.customers, {foreignKey: 'fk_customerid', targetKey: 'uuid'});
// db.customers.hasOne(db.address, {foreignKey: 'fk_customerid', targetKey: 'uuid'});



app.listen(PORT, (err)=>{
	console.log("Server is running on port :", PORT)
	console.log("===========================================================")
	console.log("============================================================")
})
//console.log(connection)

