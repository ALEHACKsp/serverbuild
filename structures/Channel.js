module.exports = class Channel {
    constructor(ChannelData) {
        this.type = ChannelData.type;
        this.position = ChannelData.position;
        this.permissionOverwrites = ChannelData.permissionOverwrites;
        this.topic = ChannelData.topic;
        this.name = ChannelData.name;
        this.rateLimitPerUser = ChannelData.rateLimitPerUser;
        this.parentID = ChannelData.parentID;
    }
}