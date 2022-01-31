//here the event starts
const { events: { rateLimit } } = require("../../botconfig/settings.json");
module.exports = (client, rateLimitData) => {
    if(rateLimit) {
        console.log(JSON.stringify(rateLimitData).grey)
    }
}

