# Calculator Discord Rich Presence

<h1>Requirements</h1>

>[Nodejs](https://nodejs.org/en/download/) <br>
[Visual Studio Code](https://code.visualstudio.com/) or any other code editor <br>
[Git](https://git-scm.com/downloads) <br>
[Discord](https://discord.com/)

<h1>How To Use</h1>

- Go to [Discord Developers Portal](https://discord.com/developers/applications) and then go to the top left corner of your screen, click "Create Application" and name it. (I recommend naming it as "Calculator Bot")

- Then click onto the application under "Rich Presence" category, and then click onto "Art Assets".

- Click "Add Asset" then choose an image from your computer. [Here](https://i.imgur.com/1jDk1eo.png) is the suitable image for Calculator.

- [Download this repository as zip](https://github.com/M451z/Calculator-RPC/archive/refs/heads/main.zip) and extract it.

- Open your terminal and type "npm i discord-rpc".

- Go to "config.json" file:
```
  {
    "ClientID": "YOUR_CLIENT_ID",
    "LargeImage": "YOUR_LARGE_IMAGE_NAME", 
    "LargeImageText": "Calculator Bot",
    "Button1": "Invite Now!",
    "Button2": "Vote The Calculator",
    "Link1": "https://discord.com/api/oauth2/authorize?client_id=869500014899122246&permissions=259845909568&scope=bot%20applications.commands",
    "Link2": "https://top.gg/bot/869500014899122246/vote",
    "Details": "Calculator is a verified Discord Bot \nthat's developed to help you with maths."
  }
```
- Change `YOUR_CLIENT_ID` text with your app's id (`APPLICATION ID`) that's shown under `General Information` section on your app's developer page.

- Change `YOUR_LARGE_IMAGE_NAME` text with your uploaded image's name that's under `Rich Presence>Art Assets` section as seen in the following image.<br> 
 <img src="https://imgur.com/JTGOs2W.png" >

- You're good to go, open your terminal and type `node index.js` to make rich presence shown in your status!

**RESULT**

<img src="https://imgur.com/6O7nLdZ.png">

Note: Buttons will not work for you, but they always will be working for others!

<h3>Developer</h3>

👤 Emir.
- GitHub: [M451z](https://www.github.com/M451z)
- Discord: [Emir.#2950](https://www.discord.com/users/453613270725558292)

<h3>Contributing</h3>

- Contributions, issues and feature requests are always needed and welcome!
- If you have any issue, send your issue via [this page](https://github.com/Team-Code-Cafe/CodeCafeBot/issues).

<h3>Support</h3>

You can show your support by giving a ⭐ or using the RPC!

<h3>License</h3>

Copyright © 2021 M451z<br>
This project is [MIT](https://en.wikipedia.org/wiki/MIT_License) Licensed.

