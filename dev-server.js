import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from './webpack.config'

var app = express()
var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
}))
app.use(webpackHotMiddleware(compiler))

app.listen(3000, 'localhost', function() {
    console.log("dev server is running at http://localhost:8000")
})