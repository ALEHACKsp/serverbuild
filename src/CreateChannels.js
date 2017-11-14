var creationTC = function (client, configFile) {
    try {
        let c = 0;
        setInterval(function () { if (c < Number(configFile.textChannels.length)) { client.guilds.get(configFile.serverid).createChannel(configFile.textChannels[c], "text").then(ch => { ch.edit({ topic: configFile.textChannelTopic[c] }); }); c++; } }, Number(configFile.timeout));
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
var creationVC = function (client, configFile) {
    try {
        let c = 0;
        setInterval(function () { if (c < Number(configFile.voiceChannels.length)) { client.guilds.get(configFile.serverid).createChannel(configFile.voiceChannels[c], "voice") }; c++; }, Number(configFile.timeout));
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
exports.createTextChannels = creationTC;
exports.createVoiceChannels = creationVC;