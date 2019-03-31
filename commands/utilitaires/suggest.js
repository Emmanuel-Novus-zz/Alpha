const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let arg = message.content.split(" ").slice(1);
    let thingToEcho = arg.join(" ");
    if(!args[0]) return message.channel.send("<:non:532634174407049239> Votre syntaxe est incorrecte. \n```Syntaxe : a!suggest <Description>```")
    var suggest = new Discord.RichEmbed()
        .setDescription("💡 | Nouvelle suggestion !")
        .addField("💼 __Donné par :__", "<@" + message.author.id + ">", true)
        .addField("📝 __Description :__", thingToEcho, true)
        .setColor("#FFD679")
    client.channels.get('533572241494114334').send(suggest)
    .then(function (message){
        message.react("532634174813634580")
        message.react("532634174407049239")
    }).catch(function(){

    });
    message.delete();
    message.author.send("<:oui:532634174813634580> Votre suggestion viens d'être envoyé sur le serveur principal.")
}

module.exports.help = {
    name: "suggest"
}