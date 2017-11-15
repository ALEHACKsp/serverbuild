## About Serverbuilder
Serverbuild is a <a href="https://nodejs.org/en/">NodeJS</a>-based Application to build setup <a href="https://discordapp.com/">Discord</a> Servers within Seconds using the Discord API-Wrapper <a href="https://github.com/hydrabolt/discord.js">Discord.js</a>. <br/>
• Timeout between Role/Channel/Emoji Creation to prevent Ratelimits. <br/>
• 255 Roles maximum<br />
• 50 Emojis maximum<br />
• 500 Channels maximum<br/>
• Colored Roles<br/>
• Channel Topics<br/>
• Verification Level<br/>
• Servername & Icon
## Serverbuilder Setup 
Once you've downloaded Serverbuilder, you have to install <a href="https://nodejs.org/en/">NodeJS</a> and the <a href="https://github.com/hydrabolt/discord.js">Discord.js</a> Node-Module.<br /><br />
<b>Note:</b> Make sure the Discord.js Module is installed in the extracted Serverbuilder Directory
If you haven't experience with Discord.js or even NodeJS/Serverside Scripting, don't touch the .js Files since they are important.<br/>
Rightclick the config.json File and change the strings.
## Information about the config.json File
`textChannels` is made for the Text Channels. A guild can't have more than 500 Channels.<br/>
`textChannelTopic` is made for the Channel Topic for each Channel. The length of `textChannelTopic` <b>mustn't</b> be larger/smaller than `textChannels`. `false` won't change the channel topic/won't set it.<br/>
`voiceChannels` is made for the Voice Channels. <br/>
`roles` is made for the Roles. A guild can't have more than 255 Roles. <br/>
`roleColors` is made for the Role Color for each role. It can be a Hex-Code or the Color Name.<br/>
`emojiURLs` is made for the emojis. It can be a URL, Base64-String or a File Path. File Path should look like `"./images/coolimage.png"`<br/>
`emojiNameS` is made for the name of the emoji. It mustn't contain unicode stuff.
`verificationLevel` is the Verification Level. `0 = Unrestricted, 1 = verified email, 2 = registered on discord for more than 5 minutes, 3 = member of guild for longer than 10 minutes, 4 = mobile phone verification` <br/>
`servername` is the Server Name.<br/>
`servericon` is the Server Icon. It can be a URL, Base64-String or a File Path. File Path should look like `"./images/coolimage.png"`<br/>
`timeout` is the timeout in Milliseconds how long a creation takes.<br/>
`apptoken` is the Token for your Application. Notice: User Accounts are against the Terms of Services, so use an application. Get your Token from the <a href="https://discordapp.com/developers/applications/me">Discord Developer Page</a>
## Starting the Application
Open the command prompt and navigate into bot's directory. Now you can execute the command `node .`
