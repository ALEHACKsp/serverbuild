var editName = function (client, configFile, appname) {
    try {
        if (configFile.servername) {
            client.guilds.get(configFile.serverid).setName(configFile.servername);
        } 
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
var editIcon = function (client, configFile, appname) {
    try {
        client.guilds.get(configFile.serverid).setIcon(configFile.serverIcon);
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}

exports.editName = editName;
exports.editIcon = editIcon;