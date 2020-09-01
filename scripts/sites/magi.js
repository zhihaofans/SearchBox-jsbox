let app = require("/scripts/app");
function text(searchText) {
    app.askForOpenUrl(`https://magi.com/search?q=${searchText}`);
}
module.exports = {
    text
};