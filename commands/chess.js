//const { execute } = require("./ping");

const axios = require('axios')

module.exports = {
    name: 'chess',
    description: 'Creates an open ended lichess challenge.',
    async execute(message, args, client) {
        const [ time, increment] = parseArgs(args);
        const link = await createGame(time, increment, message);
        message.channel.send(link);
    }
}

function parseArgs(args) {
    if (args.length === 0) {
        return [300, 0];
    } else if (args.length === 1) {
        return [args[0], 0];
    } else if (args.length === 2) {
        return [args[0], args[1]];
    } else {
        throw ("Argument Error");
    }
}

async function createGame(time, increment) {
    try {
        const res = await axios.post('https://lichess.org/api/challenge/open', 
        {'clock.limit': time, 
         'clock.increment': increment});
        return res.data.challenge.url;
    } catch (error) {
        console.log("error", error);
    }
}