var path = require('path')
var webpack = require('webpack')

var isDebug = process.env.NODE_ENV === 'development'
var outputPath = isDebug
                 ? path.join(__dirname, 'lib', 'debug')
                 : path.join(__dirname, 'lib', 'dist')

var libs = [
    'react',
    'react-dom',
    'react-router',
    'redux',
    'react-redux',
    'redux-thunk',
    'antd',
    'isomorphic-fetch'
]

var plugins = [
    new webpack.DllPlugin({
        path: path.join(outputPath, 'manifest.json'),
        name: '[name]',
        context: __dirname
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
]
if(!isDebug) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$', 'exports', 'require']
            },
            compress: { warnings: false },
            output: { comments: false }
        })
    )
}

module.exports = {
    devtool: 'cheap-source-map',
    entry: {lib: libs},
    output: {
        path: outputPath,
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: plugins
}