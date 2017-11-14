var check = function (client, configFile, appname) {
    try{
        if (!client.guilds.get(configFile.serverid)) {
            console.log(`[${appname}] That Server doesn't exist or the client is not on the server.`);
            process.exit(0);
        }
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
exports.checkGuildAvailability = check;