let _appScheme = require("./app_scheme");
let openerList = [
    {
        id: "alook_browser_open",
        title: "使用Alook浏览器打开"
    },
    {
        id: "alook_browser_download",
        title: "使用Alook浏览器下载"
    }
];
async function askForOpenUrl(url) {
    if (url) {
        const menuResult = await $ui.menu(openerList.map(i => i.title));
        $console.info(menuResult);
        schemeRouter(openerList[menuResult.index].id, url);
    } else {
        $ui.alert({
            title: "错误",
            message: "空白链接",
            actions: [
                {
                    title: "OK",
                    disabled: false, // Optional
                    handler: function() {
                        $app.close();
                    }
                }
            ]
        });
    }
}

function schemeRouter(id, url) {
    $console.info(`schemeRouter,id:${id},url:${url}`);
    if (id || url) {
        switch (id) {
            case "alook_browser_open":
                _appScheme.alookBrowserOpen(url);
                break;
            case "alook_browser_download":
                _appScheme.alookBrowserDownload(url);
                break;
            default:
                $ui.alert({
                    title: "打开应用失败",
                    message: `暂不允许该应用:${id}`,
                    actions: [
                        {
                            title: "OK",
                            disabled: false, // Optional
                            handler: function() {
                                $app.close();
                            }
                        }
                    ]
                });
        }
    } else {
        $ui.alert({
            title: "打开应用失败",
            message: "空白应用id或链接",
            actions: [
                {
                    title: "OK",
                    disabled: false, // Optional
                    handler: function() {
                        $app.close();
                    }
                }
            ]
        });
    }
}
module.exports = {
    askForOpenUrl
};