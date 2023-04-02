require("./server.js")
const { Client } = require('discord.js-selfbot-v13'); // npm i discord.js-selfbot-v13
const client = new Client({
});
const AutoFarm = require("auto-farm")

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
  })
  

AutoFarm({
Client: client, // Type Client
ChannelID: "1074788147512217601", // ID Text Channel
Time: 15 // Type ""Time With Second
})

{}



client.login(process.env.token) // Put Token Accoun
