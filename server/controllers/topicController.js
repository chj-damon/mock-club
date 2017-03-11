import dao from '../dao/topicDao'
import jsonResult from '../common/jsonResult'

/**
 * query all topics with pagination
 */
exports.allTopics = async (req, res) => {
    const currentPage = Number(req.query.currentPage)
    const pageSize = Number(req.query.pageSize)
    const type = 'ALL'
    const offset = (currentPage - 1) * pageSize
    try {
        const topics = await dao.findAllByPagination({type, offset, pageSize})
        const topicsCount = await dao.getTopicsCount(type)

        jsonResult(res, {
            topics,
            topicsCount
        })
    } catch (err) {
        jsonResult(res, err)  
    }
}