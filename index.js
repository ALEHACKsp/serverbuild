const { Client } = require("discord.js");
const client = new Client();
const config = require("./config");
const { timeout } = config;
const wait = ms => new Promise(r => setTimeout(r, ms || timeout));

client.on("ready", async () => {
    const targetServer = client.guilds.get(config.serverid);
    if (!targetServer) return console.log(`Server with ID ${config.serverid} was not found`);
    console.log("---------");
    console.log(`Server: ${targetServer.name} | ${targetServer.id}`);
    console.log("WARNING: All channels, roles and emojis will be replaced with the given ones in the config file in 15 seconds.");
    console.log("This will take approximately " + ((
        config.channels.length * timeout + config.emojis.length * timeout + config.roles.length * timeout
    ) / 1000) + " seconds.");
    console.log("Press CTRL + C (EOF) to exit.");
    await wait();

    // Delete channels
    console.log("Deleting channels...");
    const channels = targetServer.channels.values();
    for(let i = 0; i < channels.length; ++i) {
        await wait();
        channels[i].delete().catch(e => {
            console.log("Channel deletion failed: " + channels[i].name + "(" + e + ")");
        });
    }

    // Add channels
    console.log("Adding channels...");
    for (let i = 0; i < config.channels.length; ++i) {
        await wait();
        await targetServer.createChannel(config.channels[i].name, {
            type: config.channels[i].type,
            topic: config.channels[i].topic || undefined,
            nsfw: config.channels[i].nsfw || undefined,
            rateLimitPerUser: config.channels[i].ratelimit || undefined,
            position: config.channels[i].position || undefined
        }).catch(e => {
            console.log("Channel creation failed: " + channels[i].name + "(" + e + ")");
        });
    }

    // Delete roles
    console.log("Deleting roles...");
    const roles = targetServer.roles.values();
    for (let i = 0; i < roles.length; ++i) {
        await wait();
        roles[i].delete().catch(e => {
            console.log("Role deletion failed: " + roles[i].name + "(" + e + ")");
        });
    }

    // Add roles
    console.log("Adding roles...");
    for (let i = 0; i < config.roles.length; ++i) {
        await wait();
        await targetServer.createRole({
            name: config.roles[i].name,
            permissions: config.roles[i].permissions,
            color: config.roles[i].color
        }).catch(e => {
            console.log("Role creation failed: " + config.roles[i].name + "(" + e + ")");
        });
    }

    // Delete emojis
    console.log("Deleting emojis...");
    const emojis = targetServer.emojis.values();
    for (let i = 0; i < emojis.length; ++i) {
        await wait();
        emojis[i].delete().catch(e => {
            console.log("Emoji deletion failed: " + emojis[i].name + "(" + e + ")");
        });
    }

    // Add emojis
    console.log("Adding emojis...");
    for (let i = 0; i < config.emojis.length; ++i) {
        await wait();
        await targetServer.createEmoji(config.emojis[i].url, config.emojis[i].name).catch(e => {
            console.log("Emoji creation failed: " + config.emojis[i].name + "(" + e + ")");
        });
    }

    // Set server icon / name / verification level
    await targetServer.edit({
        name: config.servername,
        verificationLevel: config.verificationLevel,
        icon: config.serverIcon
    });
    console.log("Done!");
});

client.login(config.apptoken).catch(() => {
    console.log("An invalid token was provided");
});
