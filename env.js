import mysql from 'mysql'

const env={
	PORT:3001,
	// database:'smart-brain',
	// username:'root',
	// password:'',
	// host:'localhost',
	database:'heroku_01c077c06d98fa1',
	username:'bffdd00ca2d71d',
	password:'4e18a2a4',
	host:'us-cdbr-east-04.cleardb.com',
	dialect:'mysql',
	operatorsAliases:false,
	pool: {
		max:10,
		min:0,
		acquire:30000
	}

}

//mysql://bffdd00ca2d71d:4e18a2a4@us-cdbr-east-04.cleardb.com/heroku_01c077c06d98fa1?
export default env;