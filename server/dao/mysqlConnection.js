import mysql from 'promise-mysql'
import config from '../../config'

const pool = mysql.createPool(config.db.mysql)

const getMySqlConnection = () => {
    return pool.getConnection().disposer((connection) => {
        pool.releaseConnection(connection)
    })
}

module.exports = getMySqlConnection
