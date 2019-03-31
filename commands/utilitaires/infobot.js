const Discord = require('discord.js');
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [j], H [h], m [m], s [s]");
    var infobot = new Discord.RichEmbed()
        .setTitle("📝 Informations sur " + `${client.user.username}`)
        .addField("📋 __Nom__ :", `${client.user.username}`, true)
        .addField("🔧 __Discriminateur__ :", "#" + `${client.user.discriminator}`, true)
        .addField("📌 __Développeur__ :", "</> Emmanuel#0005", true)
        .addField("<:serveur:533709014257893396> __Serveurs__ :", `${client.guilds.size}`, true)
        .addField("📊 __Utilisateurs__ :", `${client.users.size}`, true)
        .addField("<:discordjs:533710310566133802> __Version de discord.js__ :", `v${version}`, true)
        .addField("<:nodejs:533710534474858536> __Version de node.js__ :", `${process.version}`, true)
        .addField("<:db:533709014996090885> __Mémoire__ :", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + " MB", true)
        .addField("<:system:532634174859902996> __En ligne depuis__ :", `${duration}`, true)
        .setColor("#8697CB")
    message.channel.send(infobot)
}