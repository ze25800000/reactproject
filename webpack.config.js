const path = require('path');
module.exports = {
    entry: './src/js/router.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['react-html-attrs'] //添加组件的插件配置
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                // loader: 'style-loader!css-loader?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.css', '.json', '.jsx']
    }
};