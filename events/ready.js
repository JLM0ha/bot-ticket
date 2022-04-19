const client = require("../index.js")
client.on("ready", () => {
  console.log("Ticket Bot By Eternity RP")
  client.user.setPresence({
    status: 'idle',
    activities: [{ 
      name: '/help',
      type:"WATCHING",
    }],
     });
})
