import config from '../../config'
import log4js from 'log4js'

log4js.configure({
    appenders: [{
        type: 'console'
    }, {
        type: 'file', 
        filename: 'server/logs/cheese.log', 
        maxLogSize: 1024,
        backups:4,
        category: 'cheese' 
    }],
    replaceConsole: true
})
const logger = log4js.getLogger('cheese')
logger.setLevel(config.debug ? 'INFO' : 'ERROR')

module.exports = logger