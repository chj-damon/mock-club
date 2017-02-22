import logger from '../common/logger'

const ignore = /^\/(public|agent)/

exports = module.exports = (req, res, next) => {
    //assets do not output log
    if(ignore.test(req.url)) {
        next()
        return
    }

    const time = new Date()
    logger.info('\n\nStarted', time.toISOString(), req.method, req.url, req.ip)

    res.on('finish', () => {
        const duration = ((new Date()) - time)
        logger.info('Completed', res.statusCode, ('(' + duration + 'ms)').green)
    })

    next()
}