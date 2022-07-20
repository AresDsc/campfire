const Discord = require("discord.js");
const colors = require("colors")
const client = new Discord.Client({
});
client.config = require("./config.json");

client.login(process.env.TOKEN);

client.on("ready", ()=>{
  console.log(`${client.user.tag} is now Online! Prefix: ${client.config.prefix}`.bgGreen);
  client.user.setActivity("TheForbiddenForest", {type: "WATCHING"})
})

require("./logger")(client);
//const logger = require("./logger");
//logger(client)
