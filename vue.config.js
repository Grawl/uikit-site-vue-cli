const fs = require('fs')
const dotenvSafe = require('dotenv-safe')
function fallbackFile(path, fallbackPath) {
    try {
        fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK)
        return path
    } catch (accessError) {
        return fallbackPath
    }
}
dotenvSafe.load({
    path: fallbackFile('.env', '.env.example'),
    allowEmptyValues: true,
})
module.exports = {
    devServer: {
        port: process.env.PORT,
    }
}
