var creation = function (client, configFile, appname) {
    try{
        if (configFile.roles.length != configFile.roleColors.length) return console.log(`[${appname}] Error in JSON File: Roles Array Length is not equivalent to roleColors'`);
        if(configFile.roles.length == 1) return console.log(`[${appname}] Please provide more than one Role!`)
        let c = 0;
        setInterval(function () { if (c < Number(configFile.roles.length)) { client.guilds.get(configFile.serverid).createRole({ name: configFile.roles[c], color: configFile.roleColors[c], permissions: false }); c++; } }, Number(configFile.timeout));
    } catch (e) {
        console.log(`[${appname}] ${e}`);
    }
}
exports.create = creation;