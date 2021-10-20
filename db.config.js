import env from './env.js'
import Sequelize from 'sequelize'

const connection =new  Sequelize(env.database,env.username,env.password, {
	host: env.host,
	dialect:env.dialect,

	pool : {
		max:env.pool.max,
		min:env.pool.min,
		acquire: env.pool.aquiree
	}
})
export default connection;



