const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:non:532634174407049239> Vous ne disposez pas les permissions nécessaires pour expulser un utilisateur.")
            .setColor("#E24C4B")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("KICK_MEMBERS")) {
        const member = message.mentions.members.first();
        if (!member) return message.channel.send("<:non:532634174407049239> Merci de mentionner un utilisateur pour expulser.")
        member.kick().then(member => {
            message.channel.send(`<:oui:532634174813634580> L'utilisateur **${member.user.tag}** est désormais expulser du serveur.`).catch(console.error);
        })
        message.delete();
    }
}

module.exports.help = {
    name: "kick"
}