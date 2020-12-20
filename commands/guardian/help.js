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
      embed.addField("__?anti__"," +/anti {number} `**Owner ship and admin strator**`")
      embed.addField("__?recent__","Shows Recent server")
      embed.addField("__everyone dlete and here__","preimshon role MANGE MSAGEE")
      embed.addField("__?antibot on__","anti bot oline")
      embed.addField("__?antibot off__","anti ofline")
    // embed.addField("___antiprune on Atumode ___","Role kick prune stop Automude")
    //  embed.addField("__antiprune of__","anti prune of")
     embed.addField("__Owner bot__","<@619170695267614720>")
     embed.addField("__Co owner bot__","<@737043191030874163>")
   embed.addField("__Support server __","https://discord.gg/TnPZzUF")
   //     embed.addField("__Recover__", "Shows Recovery Menu")
      const info = [`**[AD LINK BOT SERVER ](https://discord.com/api/oauth2/authorize?client_id=758724364987793418&permissions=8&scope=bot)**`];
      embed.addField('__Invite__', info.join('\n'));
      embed.setAuthor("Anti-Nuke Plugin Commands", "")
     // embed.setImage("https://cdn.discordapp.com/attachments/741615679878332506/789706372698734592/image0.png")
      ////  embed.setThumbnail("")
      embed.setImage("https://cdn.discordapp.com/attachments/741615679878332506/789724398604124220/image0.png")
    //  embed.setFooter("tno tyrell#5555")
      embed.setFooter("HM ARO")

        message.channel.send(embed);

    }
}

module.exports = HelpCommand
