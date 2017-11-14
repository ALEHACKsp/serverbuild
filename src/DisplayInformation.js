var checkTChannels = function (configFile, appname) {
    console.log(`[${appname}] Provided ${configFile.textChannels.length} Text-Channel(s)`);
}
var checkVChannels = function (configFile, appname) {
    console.log(`[${appname}] Provided ${configFile.voiceChannels.length} Voice-Channel(s)`);
}
var checkRoles = function (configFile, appname) {
    console.log(`[${appname}] Provided ${Object.keys(configFile.roles).length} Role(s)`);
}
var checkVerificationLevel = function (configFile, appname) {
    console.log(`[${appname}] Provided Verification-Level "${configFile.verificationLevel}"`);
}
var checkServerName = function (configFile, appname) {
    try {
        if (!configFile.servername) console.log(`[${appname}] Keep Servername`);
        else if (configFile.servername) console.log(`[${appname}] Provided Server Name "${configFile.servername}"`);
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
var checkWarning = function (configFile, appname) {
    try {
    console.log(`\n[${appname}] 15 Seconds left until server setup starts.\n\nWARNING: All Roles, Channels and Emotes will be removed! Press CTRL + C to cancel Setup.`);
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
var checkChannelsCreated = function (client, configFile, appname) {
    console.log(`[${appname}] Created ${Number(configFile.textChannels.length) + Number(configFile.voiceChannels.length)} Channel(s).`);
}
var checkRolesCreated = function (client, configFile, appname) {
    console.log(`[${appname}] Created ${Number(configFile.roles.length)} Role(s).`);
}
var checkEmojisCreated = function (client, config, appname) {
    console.log(`[${appname}] Created ${Number(configFile.emojiURLs.length)} Emoji(s).`);
}
var guildEdited = function (client, configName, appname) {
    console.log(`[${appname}] Guild has been edited.`);
}
exports.displayTextChannels = checkTChannels;
exports.displayVoiceChannels = checkVChannels;
exports.displayRoles = checkRoles;
exports.displayVerificationLevel = checkVerificationLevel;
exports.displayServername = checkServerName;
exports.displayWarning = checkWarning;
exports.displayCreatedChannels = checkChannelsCreated;
exports.displayCreatedRoles = checkRolesCreated;