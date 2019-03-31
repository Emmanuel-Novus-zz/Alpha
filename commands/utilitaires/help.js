const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setTitle("🌐 Listes des commandes disponibles:")
        .addField("⚡ • __Administration__ <:online:532645406580932610>", "`say`, `annonce`, `mp`")
        .addField("⚠️ • __Modération__ <:online:532645406580932610>", "`ban`, `kick`, `warn`, `clear`")
        .addField("🔨 • __Utilitaires__ <:online:532645406580932610>", "`help`, `test`, `invite`, `suggest`, `bvn`, `infobot`, `infodiscord`")
        .addField("🎮 • __Divertissement__ <:online:532645406580932610>", "`sondage`, `trueorfalse`")
        .addField("🚨 • __Anti-raid__ <:online:532645406580932610>", "`checkid`, `gban`, `ungban`")
        .addField("🎵 • __Musique__ <:offline:532645406899961862>", "`Prochainement disponible..`")
        .setThumbnail(`${client.user.avatarURL}`)
        .setColor("#8697CB")   
    message.channel.send(help)
}

module.exports.help = {
    name: "help"
}