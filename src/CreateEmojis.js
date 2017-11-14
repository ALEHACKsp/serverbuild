var create = function createEmojis(client, configFile, appname) {
    try {
        let c = 0;
        setInterval(function () { if (c < Number(configFile.emojiURLs.length)) { client.guilds.get(configFile.serverid).createEmoji(configFile.emojiURLs[c], configFile.emojiNames[c]); c++ } }, Number(configFile.timeout));
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
exports.create = create;