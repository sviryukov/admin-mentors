const path = require('path');
const pages = require('./src/pages');

const entries = {};
pages.forEach(page => entries[page.script] = './src/pages/' + page.script + '.js');

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, '/assets/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                exclude: /node-modules/
            }
        ]
    }
};