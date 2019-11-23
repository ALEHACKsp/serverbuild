// Package imports
const { Client } = require("discord.js");
const chalk = require("chalk");

// Config import
const config = require("./config");

// Code that is used to trigger the bot
const code = Math.random().toString(36).substr(2);

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

// Login with token that is provided in config file
client.login(config.token);