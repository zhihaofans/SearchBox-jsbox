let apiUrl = {
    text: "https://m.baidu.com/s?word="
};
function text(key) {
    $app.openURL(apiUrl.text + key);
}
module.exports = {
    text
};