// Calculator Image Link => https://i.imgur.com/1jDk1eo.png
const RPC = require("discord-rpc");
const client = new RPC.Client({
    transport: "ipc"
})
const config = require("./config.json")

client.on("ready", () => {
    client.setActivity({
        details: config.Details,
        state: config.State,
        largeImageKey: config.LargeImage,
        largeImageText: config.LargeImageText,
        buttons:[
            {
                label: config.Button1,
                url:config.Link1
            },
            {
                label: config.Button2,
                url: config.Link2
            }
        ]
    })

    console.log(`RPC is active, authed for the user ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
})

client.login({
    clientId: config.ClientID
})
