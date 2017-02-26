import crypto from 'crypto'

module.exports = {
    encrypt() {
        const hash = crypto.createHash('sha256')
        hash.update('123456')
        return hash.digest('hex')
    },
    compare(password, encryptedPassword) {
        return this.encrypt(password) === encryptedPassword
    }
}