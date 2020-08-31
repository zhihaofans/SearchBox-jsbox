let cacheDir = "/.cache/";
function saveCache(dir, fileName) {
    var name = fileName;
    if ($file.exists(cacheDir + dir + "/" + fileName)) {
        name += "._rename_" + new Date().getTime();
    }
    return $file.write(cacheDir + dir + "/" + name);
}
module.exports = {
    saveCache
};