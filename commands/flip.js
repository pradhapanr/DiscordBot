module.exports = {
    name: 'flip',
    description: 'Flips a coin for the user, prints heads or tails.',
    execute(message, args, client) {
        let num = Math.random()
        if (num > 0.5) {
            message.channel.send('**Heads!**')
        } else {
            message.channel.send('**Tails!**')
        }
    }
}