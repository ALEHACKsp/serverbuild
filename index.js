const appname = "Serverbuild";
const discordjs = require("discord.js");
const client = new discordjs.Client();
const guildAvailable = require("./src/GuildAvailable.js");
const JSONCheck = require("./src/CheckJSONError.js");
const dispInfo = require("./src/DisplayInformation.js");
const createChannel = require("./src/CreateChannels.js");
const createRole = require("./src/CreateRoles.js");
const createEmoji = require("./src/CreateEmojis.js");
const wipe = require("./src/WipeServer.js");
const editGuild = require("./src/EditGuild.js");
var configFile;
try {
    configFile = require("./config.json");
} catch (error) {
    JSONCheck.checkSyntaxError(client, configFile, appname, error);
    process.exit(0);
}
client.login(configFile.apptoken);


client.on("ready", () => {
    guildAvailable.checkGuildAvailability(client, configFile, appname);
    dispInfo.displayTextChannels(configFile, appname);
    dispInfo.displayVoiceChannels(configFile, appname);
    dispInfo.displayRoles(configFile, appname);
    dispInfo.displayVerificationLevel(configFile, appname);
    dispInfo.displayServername(configFile, appname);
    dispInfo.displayWarning(configFile, appname);
    setTimeout(function () {
        wipe.roles(client, configFile);
        wipe.channels(client, configFile);
        wipe.emojis(client, configFile, appname);
        createChannel.createTextChannels(client, configFile, appname);
        createChannel.createVoiceChannels(client, configFile, appname);
        dispInfo.displayCreatedChannels(client, configFile, appname);
        createRole.create(client, configFile, appname)
        dispInfo.displayCreatedRoles(client, configFile, appname);
        createEmoji.create(client, configFile, appname);
        editGuild.editName(client, configFile, appname);
        editGuild.editIcon(client, configFile, appname);
    }, 15000);
});
