//项目地址及打包路径配置文件
const path = require("path");
const BASE_PATH = path.join(path.resolve(__dirname, '../'));

module.exports = {
    HTML_PATH: path.join(BASE_PATH,'src/index.html'),
    STYLE_PATH: 'styles/',
    SCRIPT_PATH: 'scripts/',
    IMAGE_PATH: 'images/',
    OUTPUT_PATH: path.join(BASE_PATH,'output'),
    SRC_PATH: path.join(BASE_PATH,'src/app.js'),
    PUBLIC_PATH: '/',
    PORT: 3000
}