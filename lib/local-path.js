const path = require('path');

module.exports = {
    // 判断是否是本地模版
    isLocalPath(templatePath) {
        return /^[./] | [(^a-zA-Z)]: /.test(templatePath);
    },
    // 获取本地模版的绝对路径
    getTemplatePath(templatePath) {
       return path.isAbsolute(templatePath)
        ? templatePath
        : path.normalize(path.join(process.cwd(), templatePath));
    }
};