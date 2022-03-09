const { Client, Intents, Message} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const prefix = "bruh";


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () =>{
    console.log('med online')
    client.user.setPresence({ activities: [{ name: "Apex Legends" }], status: 'active' });
})

client.on('messageCreate', (message) => {
    if(message.content.toLowerCase().includes(prefix)){
        let med =[
            "bruh",
            "shut up",
            "LMFAOOOAOOOO",
            "no",
            "nahhh",
            "yes",
            "YESSS",
            "yalo",
            "play apex w me",
            "that's stupid",
            "i'm stupid ",
            "ur stupid",
            "i hâte it",
            "french people",
            "do u think i know that?",
            "fuck you",
            "i'm brocken",
            "i will not suck yo toes🤨🤨",
            "no damsels?",
            "no i don't ",
            "ratio + L + cope",
            "Uwu",
            "xd",
            "die",
            "i died to crimson",
            "yalo is british",
            ":flag_gb: paul",
            "italians aren't real",
            "😘",
            "🥺",
            "BLAH BLAH BLAH IDC",
            "you undercooked crouton ",
            "smells indigenous in here",
            "i have the comedic value of a spoon",
            "lookin like a double wide surprise ",
            "what emotion does a popcorn kernels exhibit",
            "say goodbye to the little ones",
            "naked wrestling ah ha ha",
            "supreme gucci ryan woodly ",
            "i'm not transformersexual, megatronsexual",
            "what even are that",
            "i wanna wear ciel's hat like one of those jewish caps",
            "cooch is finger licking good"
        ]
        message.channel.send(`${med[Math.floor(Math.random() * med.length)]}`)
    }
}) 
client.login(process.env.TOKEN)
