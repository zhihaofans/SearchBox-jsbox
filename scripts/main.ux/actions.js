const app = require("./app");

exports.tapped = sender => {
    $("button_hello").title = "Hi";
};
