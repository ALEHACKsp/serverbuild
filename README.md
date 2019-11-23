# serverbuilder
<img src="https://user-images.githubusercontent.com/30553356/69485604-f12ad280-0e41-11ea-828c-402f0e193d2d.png"><br/>
Serverbuilder is a simple app that lets you easily clone other Discord servers by pasting a unique code into the server. The bot will do everything else for you.<br/>
This can be ran on a bot account (recommended way) or if the bot is not on the server you want to clone, you can use a user token. 

### Setup
To use this, you will need to install [Node.js](https://nodejs.org/en/) version 8 or higher. When installed, run `npm install`. This will install all required dependencies.<br/>
Now you want to place your bot/user token in the config file (config.json). Once you've done that, you can run the app by executing `node .` in the bot's folder.

### What does it clone?
This bot clones:
- Roles
- Permission Overwrites in channels
- Voice channels
- Text channels
- Categories
- Emojis

### Prerequisites
- If you are going to run this on a bot account, make sure it is on less than 10 servers as Discord only allows server creation for bots that are in less than 10 guilds.
- If you decide to use a user token, do note that Discord might terminate your account
