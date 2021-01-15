module.exports = {
    name: 'help',
    description: 'Returns List of Available Commands',
    execute(message, args, client) {
        message.author.send('**Hello!** This is the current list of commands that this bot has: \n\n' + 
                            '**!chess (time) (increment)** generates a link to a lichess lobby.\n' +
                            '**!leaderboard** displays the leaderboard.\n' +
                            '**!leaderboard add (username)** adds a summoner to the leaderboard.\n' +
                            '**!leaderboard remove (username)** removes a summoner from the leaderboard.\n' +
                            '**!leaderboard update** updates the leaderboard statistics.\n' + 
                            '**!flip** flips a coin for quick decisions.\n' +
                            '**!ping** responds with the ping that the bot is operating on.\n\n' +
                            '***Have fun!***'
        );
    }
}