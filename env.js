import mysql from 'mysql'

const env={
	database:'nodesql',
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