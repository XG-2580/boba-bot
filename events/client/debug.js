//here the event starts
const { events: { debug } } = require("../../botconfig/settings.json");
module.exports = (client, info) => {
  if(debug) {
    console.log(String(info).grey);
  }
}

