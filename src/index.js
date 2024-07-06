const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildModeration,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online.`);
});

// messageCreate Event

client.on("messageCreate", (message) => {
    if (message.author.bot) {
      return;
    }

    if (message.content == `<@${process.env.CLIENT_ID}>`) {
      let replies = ["Hello!","Hi","What's Up?","*Beep-Boop*"]
      
      message.reply(replies[Math.floor(Math.random() * 4)])
    }
});

// interactionCreate Event

client.on("interactionCreate", (interection) => {
    if (!interection.isChatInputCommand()) return;
      
      if (interection.commandName == 'test') {
          interection.reply(`Hi. This is a interaction command test. If you see this, bot and this command works normal.`)
      }
});
  
client.login(process.env.TOKEN);