const { Client } = require("discord.js");
const chalk = require("chalk");
const config = require("./config");
const code = Math.random().toString(36).substr(2);
const client = new Client({
    disableEveryone: true
});

client.on("ready", () => {
    console.log(chalk.bgBlue(`Logged in as ${client.user.tag}`));
    console.log("What to do next:\n" +
                "1.) Copy and paste the code shown below into any channel of the server you want to clone\n" +
                "2.) To cancel the cloning process, you now have 10 seconds to cancel by pressing CTRL + C\n" +
                "3.) Wait for the bot to clone all channels, roles and permissions.\n" +
                chalk.yellow("Tip: If you find a bug, make sure to report it on the official repository.\n\n") +
                chalk.magenta("Code: " + code));
});

client.login(config.token);