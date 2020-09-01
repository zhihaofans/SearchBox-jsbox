let baidu = require("./sites/baidu"),
    magi = require("./sites/magi");
let searchEngine = [
    {
        id: "baidu_text",
        title: "百度搜索"
    },
    {
        id: "magi_text",
        title: "Magi搜索"
    }
];
async function askToDo(inputText) {
    const menuResult = await $ui.menu(["搜索", "分词"]);
    $console.info(menuResult);
    //menuResult.index , menuResult.title
    switch (menuResult.index) {
        case 0:
            search(inputText);
            break;
        default:
            $ui.alert({
                title: "错误",
                message: "暂不支持该功能",
                actions: [
                    {
                        title: "OK",
                        disabled: false, // Optional
                        handler: function() {}
                    }
                ]
            });
    }
}
async function search(inputText) {
    const searchMenuResult = await $ui.menu(searchEngine.map(s => s.title));
    switch (searchEngine[searchMenuResult.index].id) {
        case "baidu_text":
            baidu.text(inputText);
            break;
        case "magi_text":
            magi.text(inputText);
            break;
        default:
            $ui.alert({
                title: "搜索失败",
                message: "暂不支持该搜索引擎",
                actions: [
                    {
                        title: "OK",
                        disabled: false, // Optional
                        handler: function() {}
                    }
                ]
            });
    }
}
module.exports = {
    baiduText: baidu.text,
    askToDo
};