const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development', // production
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    module: {
        rules: [ // rules 写成 loaders 报错
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}