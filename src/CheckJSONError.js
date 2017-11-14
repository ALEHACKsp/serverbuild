var check = function (client, configFile, appname, error) {
    if (String(error).indexOf("Unexpected") != -1) {
        console.log(`[${appname}] SyntaxError in config.json found.`);
    } else {
        console.log(error);
    }
}
exports.checkSyntaxError = check;