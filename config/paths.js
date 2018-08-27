const path = require('path');

module.exports = {
    root: path.resolve(__dirname, '../'),
    src: path.resolve(__dirname, '../', 'src'),
    entry: path.resolve(__dirname, '../', 'src/index.js'),
    img: path.resolve(__dirname, '../', 'src/assets/img'),
    html: path.resolve(__dirname, '../', 'public/index.html'),
    output: path.resolve(__dirname, '../', 'build'),
};
