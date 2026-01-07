const path = require('path');


//entry -> output
console.log(path.join(__dirname, 'public'));

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //whenever you see a file ending with .js and is not present inside
            //node_modules folder.Just run the file thorugh babel
            exclude: /node_modules/
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
        directory: path.join(__dirname , 'public')
        },
        historyApiFallback : true,
    }
};