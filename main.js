var text = $context.text;
var link = $context.link;
var image = $context.image;
if (text) {
    $ui.alert({
        title: "text",
        message: text,
        actions: [
            {
                title: "OK",
                disabled: false, // Optional
                handler: function() {}
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