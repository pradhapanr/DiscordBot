# Chess and League Bot

### A discord bot made to cater to a particular friend group.

This bot was put together as a small project to make easy tasks even easier. With this bot, things like
flipping a coin, formulating a poll, creating an online chess match, or comparing stats and positions in ranking on the
popular game League of Legends can be done in simple text commands on the discord server the bot is on.

This project was intended to help me build a strong grasp on using some of Javascript's libraries effectively, as well as working with different
APIs and getting comfortable making GET and POST requests. The APIs I worked with in this project were the Riot Games
League of Legends API as well as the Lichess API.

This bot was made with the use of the Discord.js library as well as Node.js for managing the server. Axios was used to
make API calls. User data was stored in a local MongoDB client.

### Setup
-----
<strong>THIS BOT IS NOT READY FOR FULL DEPLOYMENT. ONLY RUN THIS FOR EXPERIMENTATION OR AIDING DEVELOPMENT.</strong>

I strongly suggest testing the bot in a demo server first before adding to any official servers. The setup for the bot
can be found under the following link provided by the official DiscordJS team.

https://discordjs.guide/preparations/adding-your-bot-to-servers.html#creating-and-using-your-invite-link

After setting up the bot appropriately, you will need to create a config.json file. This will hold any
important API keys and passwords that the bot requires on YOUR end. The sample code for this is found in
the repository, and looks like this.

```js
{   
    "token": "",
    "prefix": "-",
    "mongoPath": "",
    "riotKey": ""
}
```

Note that the prefix by default is the hyphen key. This can be changed, but I would suggest an uncommon 
prefix as not to interfere with other bots.

The token variable is the discord token / API key.

The mongoPath variable is the file path to where the mongo database is located.

**THIS WILL BE DEPRECATED AND WILL BE SWAPPING IT TO MONGO ATLAS (cloud database) ASAP**

The riotKey variable is a Riot Games League of Legends API Key. Valorant support for this bot will be 
added in the future.


Once the config.json file is set up appropriately, you should now be able to run the bot! This can be done
by opening the terminal in the directory containing the project and running the command: 

````
 node main.js
````

Further improvements in the future will include:

-   Listing most recently played League of Legends game with details!
-   Recording chess games with a win/loss counter for each user!
-   Experience system (based on the amount a user interacts in the server)
