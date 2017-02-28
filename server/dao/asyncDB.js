import mysql from 'mysql'
import config from '../../config'

const pool = mysql.createPool(config.db.mysql)

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                resolve(err)
            } else {
                conn.query(sql, values, (err, result) => {
                    if (err) {
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