const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:non:532634174407049239> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#E24C4B")
         message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
    let msg = message.content.split(' ').slice(1);
    if (!msg[0]) {
        message.channel.send("<:non:532634174407049239> Merci de donner un chiffre entre 1 et 100 pour effectuer cette commande.")
    }else {
        let x = parseInt(msg[0], 10)
        if (x > 100) {
            x = 100
        }

        message.delete();
        message.channel.bulkDelete(x)
        message.channel.send("<:oui:532634174813634580> **" + x + " messages supprimés.**")
    }
}
} 