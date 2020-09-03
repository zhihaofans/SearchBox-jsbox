let router = {
    text: require("/scripts/text")
};
let text = $context.text,
    link = $context.link,
    image = $context.image,
    clipText = $clipboard.text,
    clipUrl = $clipboard.link,
    clipImage = $clipboard.image;
if (text) {
    $ui.alert({
        title: "text",
        message: text,
        actions: [
            {
                title: "OK",
                disabled: false, // Optional
                handler: function() {
                    router.text.askToDo(text);
                }
            }
        ]
    });
} else if (clipText) {
    $ui.alert({
        title: "clipText",
        message: clipText,
        actions: [
            {
                title: "OK",
                disabled: false, // Optional
                handler: function() {
                    router.text.askToDo(clipText);
                }
            }
        ]
    });
} else if (link) {
    $ui.alert({
        title: "link",
        message: link,
        actions: [
            {
                title: "OK",
                disabled: false, // Optional
                handler: function() {}
            }
        ]
    });
} else if (image) {
    $quicklook.open({
        image: image
    });
} else {
    $ui.render("scripts/main");
}