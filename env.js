import mysql from 'mysql'

const env={
	PORT:3001,
	database:'smart-brain',
	username:'root',
	password:'',
	host:'localhost',
	dialect:'mysql',
	operatorsAliases:false,
	pool: {
		max:10,
		min:0,
		acquire:30000
	}

}
export default env;