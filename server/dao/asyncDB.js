import mysql from 'mysql'
import config from '../../config'
import logger from '../common/logger'

const pool = mysql.createPool(config.db.mysql)

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                logger.error(err)
                resolve(err)
            } else {
                conn.query(sql, values, (err, result) => {
                    if (err) {
                        logger.error(err)
                        reject(err)
                    } else {
                        resolve(result)
                    }
                    conn.release()
                })
            }
        })
    })
}
module.exports = {query}