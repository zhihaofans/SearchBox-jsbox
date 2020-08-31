let _app = require("/scripts/app");
let apiUrl = {
    text: "https://m.baidu.com/s?word="
};
function text(key) {
    _app.askForOpenUrl(apiUrl.text + encodeURI(key));
}
module.exports = {
    text
};