const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var args = message.content.split(' ').slice(1, 2).join(' ');
    var member = args;
    message.delete()
    if(!args) {
        message.channel.send("<:non:532634174407049239> Merci d'entrer un ID pour vérifier si celui-ci est dans la blacklist.")
    }else {
  if(client.guilds.get('534820692865318912').channels.exists('name', args)) {
      message.channel.send("<:oui:532634174813634580> L'ID " + "**" + args + "** se trouve bien dans la blacklist. Pour plus de renseignements, consulter le serveur officiel.")
  } else {
    message.channel.send("<:non:532634174407049239> L'ID **" + args + "** ne fait pas parti de la blacklist.")
  }}}