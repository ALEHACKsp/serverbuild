const { Client } = require("discord.js");
const client = new Client();
const config = require("./config");


client.on("ready", async () => {
    const targetServer = client.guilds.get(config.serverid);
    if (!targetServer) return console.log(`Server with ID ${config.serverid} was not found`);
    console.log("---------");
    console.log(`Server: ${targetServer.name} | ${targetServer.id}`);
    console.log("WARNING: All channels, roles and emojis will be replaced with the given ones in the config file in 15 seconds.");
    console.log("Press CTRL + C (EOF) to exit.");
    await new Promise(r => setTimeout(r, 15000));
});

client.login(config.apptoken).catch(() => {
    console.log("An invalid token was provided");
});