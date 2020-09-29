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
      embed.addField("__+/anti__"," +/anti {number} `**Owner ship and admin strator**`")
      embed.addField("__+/recent__","Shows Recent server")
       embed.addField("__everyone dlete and here__","preimshon role MANGE MSAGEE")
      embed.addField("__+/antibot on__","anti bot oline")
      embed.addField("__+/antibot off__","anti ofline")
     embed.addField("___+/antiprune on___","Role kick prune stop Automude")
     embed.addField("__+/antiprune of__","anti prune of")
     embed.addField("__Owner bot__","<@619170695267614720>")
     embed.addField("__Co owner bot__","<@621497043663323149>")
   embed.addField("__Support server __","https://discord.gg/TnPZzUF")
   //     embed.addField("__Recover__", "Shows Recovery Menu")
      const info = [`**[AD LINK BOT SERVER ](https://discord.com/api/oauth2/authorize?client_id=758724364987793418&permissions=8&scope=bot)**`];
      embed.addField('__Invite__', info.join('\n'));
      embed.setAuthor("Anti-Nuke Plugin Commands", "")
     // embed.setImage("https://cdn.discordapp.com/attachments/717616425040347166/717625089683881994/0e0a866e9011385fb8039376210467a6adc329ede0da13a0c15da6f3340020b9.jpeg")
      ////  embed.setThumbnail("")
      embed.setImage("https://cdn.discordapp.com/avatars/758724364987793418/578e1d5e60c4091863344855a84da9a0.png?size=1024")
    //  embed.setFooter("tno tyrell#5555")
      embed.setFooter("BY DARK PLAN")

        message.channel.send(embed);

    }
}

module.exports = HelpCommand
