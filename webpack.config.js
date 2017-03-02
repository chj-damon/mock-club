var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

var PRODUCTION = process.env.NODE_ENV === 'production' ? true : false
var BUILD_DIR = path.resolve(__dirname, './dist')
var APP_DIR = path.resolve(__dirname, './src')

var entry = PRODUCTION
            ? `${APP_DIR}/index.jsx`
            : [
                `${APP_DIR}/index.jsx`,
                'webpack-hot-middleware/client'
              ]
var plugins = PRODUCTION
              ? [
                  new webpack.optimize.UglifyJsPlugin(),
                  new webpack.LoaderOptionsPlugin({
                      minimize: true
                  }),
                  new webpack.optimize.AggressiveMergingPlugin(),
                  new ExtractTextPlugin('style-[contenthash:10].css')
              ]
              : [    
                  new webpack.DllReferencePlugin({
                      context: __dirname,
                      manifest: require('./lib/debug/manifest.json')
                  }),
                  new AddAssetHtmlWebpackPlugin({
                      filepath: require.resolve('./lib/debug/lib.js'),
                      includeSourcemap: PRODUCTION ? false : true
                  }),
                  new webpack.HotModuleReplacementPlugin()
              ]
plugins.push(
    new HtmlWebpackPlugin({
        template: 'template.html'
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
    })
)

var externals = PRODUCTION ? {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
} : {}

var cssIndentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]-[local]'
var cssLoader = PRODUCTION
                ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?localIndentName=' + cssIndentifier, 'postcss-loader']
                })
                : ['style-loader', 'css-loader?localIndentName=' + cssIndentifier, 'postcss-loader']
var scssLoader = PRODUCTION
                ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?localIndentName=' + cssIndentifier, 'sass-loader', 'postcss-loader']
                })
                : ['style-loader', 'css-loader?localIndentName=' + cssIndentifier, 'sass-loader', 'postcss-loader']

module.exports = {
    entry: entry,
    plugins: plugins,
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: PRODUCTION ? '[name]-[hash:12].min.js' : '[name].js'
    },
    externals: externals,
    module: {
        rules: [{
            test: /\.js$|\.jsx$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }],
            include: APP_DIR,
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]'
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: cssLoader
        }, {
            test: /\.scss$/,
            use: scssLoader
        }]
    },
    resolve:{
        modules: [
            "node_modules",
            APP_DIR
        ],
        extensions: [".js", ".json", ".jsx", ".css", ".gif"],
    },
    devtool: "cheap-source-map"
}