const { Client } = require("discord.js");
const config = require("./config");
const client = new Client({
    disableEveryone: true
});

client.login(config.token);