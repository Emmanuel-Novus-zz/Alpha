const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.channel.send("<:oui:532634174813634580> __**Le serveur est actuellement en ligne.**__")
}

module.exports.help = {
    name: "test"
}