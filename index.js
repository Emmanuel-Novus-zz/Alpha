const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const fs = require("fs");

const config = require("./config.json");
client.config = config;

client.on('ready', () => {
  console.log(`${client.user.username} starting...`);
  console.log(`Serving ${client.guilds.size} guilds.`);
  console.log(`${client.users.size} users`);
  console.log('Développé par Emmanuel');

  const activities = [
      "a!help | Alpha",
      `a!help | ${client.guilds.size} serveurs`,
      `a!help | ${client.users.size} users`
  ];
  client.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[index], {
          type: "PLAYING",
          url: "http://twitch.tv/client"
      });
  }, 15000);
});


client.login("NTMyNjIzNTg4NjkyNTkwNzY3.DxfL-Q.txrI1UhnGbiU9IbNRjlUq7j1Ffw");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
 
client.commands = new Enmap();
 
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/anti-raid/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/anti-raid/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/utilitaires/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/utilitaires/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/admin/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/admin/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/modo/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/modo/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/divertissement/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/divertissement/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.on("guildMemberAdd", member => {
  if(client.guilds.get('534820692865318912').channels.exists('name', member.user.id)) { 
    member.ban().then
    member.send(`**🔒 Vous avez été banni du serveur dans le quel vous avez essayez de rejoindre car vous êtes dans la blacklist d'Apha. Pour demander un retrait de la blacklist, contactez Emmanuel#2543 !**`)
    }else {
      return;
    }
  })

  client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
        .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté Alpha.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("#F03A17")
      client.channels.get('532627768979226644').send(embed);
});

