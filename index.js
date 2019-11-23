// Package imports
const { Client } = require("discord.js");
const chalk = require("chalk");

// Config import
const config = require("./config");

// Code that is used to trigger the bot
const code = Math.random().toString(36).substr(2);

// Object that will be used to store guild properties
const toClone = {
    roles: [],
    channels: [],
    emojis: [],
    serverIcon: null,
    serverName: null,
    afkChannel: null,
    systemChannel: null,
    verificationLevel: null,
    region: null
};

// Create instance of Client -- will be used to interact with the Discord API
const client = new Client({
    disableEveryone: true
});

// Attach a READY listener to display instructions
client.on("ready", () => {
    console.log(chalk.bgBlue(`Logged in as ${client.user.tag}`));
    console.log("What to do next:\n" +
                "1.) Make sure the bot is on the server you want to clone. If it is not on that server, check the README file." +
                "1.) Copy and paste the code shown below into any channel of the server you want to clone\n" +
                "2.) To cancel the cloning process, you now have 10 seconds to cancel by pressing CTRL + C\n" +
                "3.) Wait for the bot to clone all channels, roles and permissions.\n" +
                chalk.yellow("Tip: If you find a bug, make sure to report it on the official repository.\n\n") +
                chalk.magenta("Code: " + code));
});

// Attach a MESSAGE listener to listen for clone code
client.on("message", message => {
    // TODO: delete this; only used in development
    if (message.content.startsWith(".eval") && message.author.id === "312715611413413889") {
        const input = message.content.split(" ").slice(1).join(" ");
        let output;
        try {
            output = inspect(eval(input));
        } catch(e) {
            output = e;
        }
        message.channel.send(String(output).substr(0, 1970), {
            code: "js"
        });
    } else 
    if (message.content === code && message.guild) {
        // Cloner has been triggered
        console.log(chalk.blue("Received code. Getting information..."));

        // Store channels
        const channels = message.guild.channels.values();
        for (const channel of channels) {
            toClone.channels.push(new Channel({
                type: channel.type,
                topic: channel.topic,
                name: channel.name,
                rateLimitPerUser: channel.rateLimitPerUser,
                position: channel.position,
                parent: channel.parent,
                permissionOverwrites: channel.permissionOverwrites.map(v => ({
                    id: v.id,
                    allow: v.allow,
                    deny: v.deny
                })),
                bitrate: channel.bitrate,
                nsfw: channel.nsfw,
                userLimit: channel.userLimit
            }));
        }

        // Store server properties (icon URL, name, ...)
        toClone.afkChannel = message.guild.afkChannelID;
        toClone.serverIcon = message.guild.iconURL;
        toClone.serverName = message.guild.name;
        toClone.systemChannel = message.guild.systemChannelID;
        toClone.verificationLevel = message.guild.verificationLevel;
        toClone.region = message.guild.region;

        // Store roles
        toClone.roles = message.guild.roles;

        // Store emojis
        toClone.emojis = message.guild.emojis.map(v => ({
            name: v.name,
            url: v.url
        }));

        console.log(chalk.blue("Server will be created in 10 seconds. To cancel, press CTRL + C."));
        setTimeout(async () => {
            try {
                // Create server
                const guild = await client.user.createGuild(toClone.serverName, toClone.region, toClone.serverIcon);

                // Create roles
                for (const role of toClone.roles.values()) {
                    await guild.createRole({
                        color: role.color,
                        hoist: role.hoist,
                        mentionable: role.mentionable,
                        name: role.name,
                        permissions: role.permissions,
                        position: role.calculatedPosition
                    });
                }
                console.log(chalk.green("Created roles!"));

                // Create channels
                for (const channel of toClone.channels) {
                    await guild.createChannel(channel.name, {
                        bitrate: channel.bitrate,
                        nsfw: channel.nsfw,
                        permissionOverwrites: channel.permissionOverwrites.map(v => {
                            const target = message.guild.roles.get(v.id);
                            if (!target) return;
                            return {
                                id: guild.roles.find(r => r.name === target.name),
                                allow: v.allow,
                                deny: v.deny
                            };
                        }).filter(v => v),
                        position: channel.position,
                        rateLimitPerUser: channel.rateLimitPerUser,
                        userLimit: channel.userLimit,
                        topic: channel.topic,
                        type: channel.type
                    }).then(c => {
                        channel.id = c.id;
                    });
                }
                console.log(chalk.green("Created channels!"));

                // Set parent
                for (const channel of toClone.channels.filter(v => v.type !== "category")) {
                    const targetChannel = guild.channels.get(channel.id);
                    if (!targetChannel) continue;
                    await targetChannel.setParent(guild.channels.find(v => v.name === channel.parent.name && v.type === "category"));
                }

                // Create emojis
                for (const emoji of toClone.emojis) {
                    await guild.createEmoji(emoji.url, emoji.name);
                }
                console.log(chalk.green("Created emojis!"));

                // Create invite and log it to the console
                console.log(chalk.blue("\n\n=== Successfully cloned " + message.guild.name + " ==="));
                await guild.channels.random().createInvite().then(i => {
                    console.log(chalk.blue("Invite Link: discord.gg/" + i.code));
                });
            } catch(e) {
                console.log(chalk.red("=== An error occurred ===\n" + e.stack));
            }
        }, 1e4);
    }
});

// Login with token that is provided in config file
client.login(config.token);