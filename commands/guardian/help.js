const { Command } = require('discord-akairo');
const now = new Date();

class HelpCommand extends Command {
    constructor() {
        super('commands', {
            aliases: ['commands', 'help'],
            channel: 'guild'
        });
    }

    async exec(message) {

        const embed = this.client.util.embed().setColor("#000000");
        const prefix = message.guild.prefix;


      embed.setColor("#000000")
      embed.addField("__+/anti__","Configure Your Server Limits `**OWNER ONLY**`")
      embed.addField("__+/recent__","Shows Recent Actions")
       embed.addField("__everyone dlete and here__","Reset Anti-Nuke Settings")
      embed.addField("__+/antibot on__","anti")
      embed.addField("__+/antibot off__","anti")
      embed.addField("__Owner bot__","<@619170695267614720>")
     embed.addField("__Co owner bot__","<@621497043663323149>")
     embed.addField("__BOT SECURIY SERVER DARK PLAN__","")
   //   embed.addField("__Removeperms__","Take All Permissions")
 //     embed.addField("__Adminrestore__","Restore All Permissions")
   //     embed.addField("__Recover__", "Shows Recovery Menu")
      const info = [`**[Direct Invite Link](https://discord.com/api/oauth2/authorize?client_id=758724364987793418&permissions=8&scope=bot)**`];
      embed.addField('__Invite__', info.join('\n'));
      embed.setAuthor("Anti-Nuke Plugin Commands", "")
     // embed.setImage("https://cdn.discordapp.com/attachments/717616425040347166/717625089683881994/0e0a866e9011385fb8039376210467a6adc329ede0da13a0c15da6f3340020b9.jpeg")
      embed.setThumbnail("")
      embed.setImage("https://cdn.discordapp.com/attachments/700409195719032921/758857832962457660/image0.gif")
    //  embed.setFooter("tno tyrell#5555")
      embed.setFooter("BY DARK PLAN   BY Cg ARO")

        message.channel.send(embed);

    }
}

module.exports = HelpCommand
