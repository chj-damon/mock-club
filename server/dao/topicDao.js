import sql from '../mappings/topicSqlMapping'
import {query} from './asyncDB'

module.exports = {
    async findAllByPagination(params) {
        let whereSql = ''
        switch (params.type) {
            case 'GOOD':
                whereSql = 'and good=1'
                break
            case 'SHARE':
                whereSql = "and tab='share'"
                break
            case 'ASK':
                whereSql = "and tab='ask'"
                break
            case 'JOB':
                whereSql = "and tab='job'"
                break
            case 'ALL':
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
                whereSql = 'and good=1'
                break
            case 'SHARE':
                whereSql = "and tab='share'"
                break
            case 'ASK':
                whereSql = "and tab='ask'"
                break
            case 'JOB':
                whereSql = "and tab='job'"
                break
            case 'ALL':
            default:
                whereSql = ''
        }
        const topicsCount = await query(sql.topicCount + whereSql)
        return topicsCount
    }
}