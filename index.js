const Discord = require('discord.js');
const client = new Discord.Client();
const token = "Nzk1MDU4NTc4NzM3NTk0MzY5.X_D2AA.48PaHYmhcDTi8vX1zhK9Ydm9P0U"
const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect('mongodb://localhost/ValorantStats', () => {
    console.log('connected to database.')
})

client.on("ready", (msg) => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message, msg) => {
    try {
        console.log(message.content);
        test = await User.findOne({username: message.content}); 
        const password = test.password;  
        console.log(test);
        message.reply(`username: ${test.username}, password: ${test.password}`);
    } catch (error) {
        // message.reply(error);
    }
})


client.login(token);