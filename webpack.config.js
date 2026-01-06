const path = require('path');


//entry -> output
console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/playground/app.js',
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
    devtool: 'cheap-module-eval-source-map', //sourcemap
    devServer: {
        contentBase: path.join(__dirname , 'public')
    }
};