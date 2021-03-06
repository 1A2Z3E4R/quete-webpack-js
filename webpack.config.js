const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }]
    },
    mode: 'development',
    entry: {
        app: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};