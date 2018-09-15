function friendlyDate(dateStr) {
    let dateObj;
    if (typeof dateStr === 'object') {
        dateObj = dateStr;
    } else { dateObj = new Date(dateStr); }
    let time = dateObj.getTime();
    let now = Date.now(); //new Date().getTime()
    let space = now - time; //单位是毫秒
    let str = '';
    if (space < 60 * 1000) { return str = ' 刚刚'; }
    if (space < 60 * 60 * 1000) { return str = Math.floor(space / 60000) + ' 分钟前'; }
    if (space < 24 * 60 * 60 * 1000) { return str = Math.floor(space / (60 * 60 * 1000)) + ' 小时前'; } else { return str = Math.floor(space / (24 * 60 * 60 * 1000)) + ' 天前'; }
}

export default {
    install(Vue, options) {
        Vue.prototype.friendlyDate = friendlyDate;
    }
}