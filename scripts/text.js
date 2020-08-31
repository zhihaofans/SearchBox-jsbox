let baidu = require("./sites/baidu");
let searchEngine = [
    {
        id: "baidu_text",
        title: "百度搜索"
    }
];
async function askToDo(inputText) {
    const menuResult = await $ui.menu(["搜索", "分词"]);
    $console.info(menuResult);
    //menuResult.index , menuResult.title
    switch (menuResult) {
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
    
}
module.exports = {
    baiduText: baidu.text,
    askToDo
};