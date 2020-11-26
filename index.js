//don't be dumb and private your project
//paste your token in the .env

require("dotenv").config();

const config = require("./config.js")
const GuardianClient = require("./core/client.js");
const client = new GuardianClient();
var approx = require('approximate-number');

client.login("NzU4NzI0MzY0OTg3NzkzNDE4.X2zHIQ.8_0mBysPcpBu4pm72bzK5vv-Btg");


client.on('ready', function() {
   
  
      
 

  
     /// client.user.setActivity(`${client.users.cache.size} members | +/help `, {type: "WATCHING", url: "https://www.twitch.tv/flight23white"})
  
  
      client.user.setActivity("Prefix (+/help)", {type: "WATCHING", url: "https://www.twitch.tv/flight23white"})
      
  
     /// client.user.setActivity(`${approx(client.guilds.size)} Guilds | ;;help`, {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})
  

  

  
  
  
  
  

/////////






client.on('message', message => {

if(message.content.includes("@everyone")){
if(!message.member.hasPermission('MANAGE_MESSAGES')){
message.delete(); 
message.reply("You cant use everyone")
}

}

});


client.on('message', message => {

if(message.content.includes("@everyone@everyone")){
if(!message.member.hasPermission('MANAGE_MESSAGES')){
message.delete(); 
message.reply("You cant use everyone ")
}

}

});

////////

///////

client.on('message', message => {

if(message.content.includes("@here")){
if(!message.member.hasPermission('MANAGE_MESSAGES')){
message.delete(); 
message.reply("You cant use here")
}

}

});


client.on('message', message => {

if(message.content.includes("@here@here")){
if(!message.member.hasPermission('MANAGE_MESSAGES')){
message.delete(); 
message.reply("You cant use here ")
}

}

});






  ////
  
  
  
  
  
  
  
  
const db = require("quick.db"); // npm i quick.db

client.on("message", async message => {
  const prefix = "+/"; //comand

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  let antibot = await db.fetch(`antibot_${message.guild.id}`);
  if (antibot === null) antibot = "off";

  if (cmd === "antibot") {
    if (!message.guild.member(message.author).hasPermission("Owner"))
      return message.reply(`Only OWNER can use this command`);
    if (!args[0])
      return message.reply(
        `___Do you want to enter the bot to your server?___ \`off / on\``
      );

    if (args[0] === "on") {
      db.set(`antibot_${message.guild.id}`, "on");
      message.reply(`Antibot is on`).RichEmbed();
    }

    if (args[0] === "off") {
      db.set(`antibot_${message.guild.id}`, "off");
      message.reply(`Antibot is off`).RichEmbed();
    }
  }
});
client.on("guildMemberAdd", async member => {
  let antibot = await db.fetch(`antibot_${member.guild.id}`);
  if (antibot === "on") {
    if (member.user.bot) member.kick("Anti bot is on !");
  }
});


 

  




/////



 
 
  
  
  
///////
  
  
  
  console.log('ANTIWIZZ ready');
console.log('ANTIWIZZ ON');
console.log('LOGS DOWN');
console.log('')
});
 


