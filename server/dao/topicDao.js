import sql from '../mappings/topicSqlMapping'
import {query} from './asyncDB'

module.exports = {
    async findAllByPagination(params) {
        let whereSql = ''
        switch (params.type) {
            case 'GOOD':
                whereSql = 'where good=1'
                break
            case 'SHARE':
                whereSql = "where tab='share'"
                break
            case 'ASK':
                whereSql = "where tab='ask'"
                break
            case 'JOB':
                whereSql = "where tab='job'"
                break
            case 'ALL':
                whereSql = ''
                break
            default:
                whereSql = ''
        }
        const result = await query(sql.queryAll + whereSql + sql.queryByPagination, [params.offset, params.pageSize])
        return result
    },
    async getTopicsCount(type) {
        let whereSql = ''
        switch (type) {
            case 'GOOD':
                whereSql = 'where good=1'
                break
            case 'SHARE':
                whereSql = "where tab='share'"
                break
            case 'ASK':
                whereSql = "where tab='ask'"
                break
            case 'JOB':
                whereSql = "where tab='job'"
                break
            case 'ALL':
                whereSql = ''
                break
            default:
                whereSql = ''
        }
        const topicsCount = await query(sql.topicCount + whereSql)
        return topicsCount
    }
}