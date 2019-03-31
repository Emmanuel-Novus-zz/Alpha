const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("<:non:532634174407049239> Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#E24C4B")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let arg = message.content.split(" ").slice(1);
        let thingToEcho = arg.join(" ")
        if (!args[0]) return message.channel.send("<:non:532634174407049239> Votre syntaxe est incorrecte. \n```Syntaxe : a!trueorfalse <Message>```")
        var trueorfalse = new Discord.RichEmbed()
            .setTitle("❓ VRAI OU FAUX :")
            .addField(thingToEcho, "Répondez avec les réactions <:oui:532634174813634580> ou <:non:532634174407049239>!")
            .setColor("#A31F33")
        message.channel.send(trueorfalse)
        .then(function (message){
            message.react("532634174813634580")
            message.react("532634174407049239")
        }).catch(function(){

        });
        message.delete()
    }
}

module.exports.help = {
    name: "trueorfalse"
}