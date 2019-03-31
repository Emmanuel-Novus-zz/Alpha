const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var args = message.content.split(' ').slice(1, 2).join(' ');
    var member = args;
    var staffs = [
      "379705914824851469", // Emmanuel (Founder)
      "353859650686550027", // Lucaas (Moderator)
      "414074946189525012" // Enertix (Administrator)
    ];
  message.delete()
  if (staffs.includes(message.author.id)) {

  if(!args) return message.channel.send("<:non:532634174407049239> Merci d'entrer un ID afin de bannir une personne de la blacklist.");
  if(client.guilds.get('534820692865318912').channels.exists('name', args)) return message.channel.send("<:non:532634174407049239> L'ID figure déja dans la blacklist.");
    client.guilds.get("534820692865318912").createChannel(args).then(tt => message.channel.send("<:oui:532634174813634580> L'ID est désormais banni de " + client.guilds.array().length + " serveurs et inscrit dans la blacklist."));
    
  }else {
      message.channel.send("<:non:532634174407049239> Vous ne faites pas parti de l'équipe de Alpha.")
  }
}