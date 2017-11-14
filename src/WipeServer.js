var wipeRoles = function wr(client, configFile) {
    try{
        client.guilds.get(configFile.serverid).roles.forEach(role => {
            role.delete();
        });
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
var wipeChannels = function wc(client, configFile) {
    try {
        client.guilds.get(configFile.serverid).channels.forEach(channel => {
            channel.delete();
        });
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
var wipeEmojis = function we(client, configFile, appname) {
    try {
        client.guilds.get(configFile.serverid).emojis.forEach(emoji => {
            emoji.delete();
        });
    } catch (e) {
        console.log(`[${appname}] Error at deleting emojis. Perhaps there are no emojis?`);
    }
}

exports.roles = wipeRoles;
exports.channels = wipeChannels;
exports.emojis = wipeEmojis;