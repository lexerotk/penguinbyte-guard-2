const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationCommands(
        process.env.CLIENT_ID
      ),
      { body: commands }
    );
    

    console.log("Slash commands has been registered.");
  } catch (error) {
    console.log(`ERR: ${error}`);
  }
})();
