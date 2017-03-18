# Recast.AI starter kit NodeJS

A starter kit for developing bots on the [Recast.AI](https://recast.ai) platform.

> **Note:** This project is currently in beta version and can be modified at any time.

## Requirements

#### Node version

We recommand use at least `node v4.0.0`


#### Recast.AI account

Create an account on the [Recast.AI](https://recast.ai) platform and follow this [quick tutorial](https://recast.ai/gettingstarted) to create your first bot on the interface.

## Usage


#### Installation

`git clone git@github.com:RecastAI/starter-NodeJS.git my-bot && cd my-bot`

using npm
`npm install`

or yarn
`yarn`


#### Create the config file

 Create a `config.js` file at the root of your project, copy/paste these lines:

```javascript
 module.exports = {
  port: process.env.PORT || '5000',
  recast: {
    token: process.env.RECAST_TOKEN || '',
    language: process.env.RECAST_LANGUAGE || '',
  },
}
```

Complete the Recast.AI `token` and `language`: go to your bot page, click on the settings icon (on the right of your screen), and copy the `request token`.
Then, set the default language of your bot: `'en'`, `'fr'`...


#### Run locally

using npm `npm start`

using yarn `yarn start`

> **Note:** Next steps, only if you have connected your bot to channels, using the Bot Connector tool

- download [ngrok](https://ngrok.com/)
- launch it: `./ngrok http 5000`
- copy the url ngrok gave and past it in the [Recast.AI](https://recast.ai) interface: Go to your bot page, click on the **RUN** tab and edit your `current bot webhook`
- Chat with your bot on the channels you've configured ;)

#### Alternative

If you're not using the Bot Connector to connect your bot to channels, you will only need the `server.js` file and the `message.js` file and make changes depending the way you want to receive the message.

## Documentation

Code | Documentation
------------ | -------------
Receiving messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Sending messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Rich messaging | See the different [payload message](https://man.recast.ai)
Manage the conversation | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - converse


## How your code will be deployed?

To host your bot and deploy your code, create a repository on Github, and push this on code on it.
Connect your github account on Recast:

- Go to your bot page
- Click on the **RUN** tab, and on the **Bot Hosting** menu
- Connect your Github account
- Select the repository you've just created
- Wait a little, we're starting your instance...

Every time you will push on master, we'll deploy your code :clap:

#### Requirements

Since we deploy your code your code in generic containers, there are 3 requirements:

- [x] Your package.json **must** contain the `build` task. It must be present even if empty or just copying files. The default one you will find in the starter kit is `"build": "babel src -d lib"` to compile your Javascript. So you can code with your favorite ES6, ES7 features :thumbsup:
- [x] A lib directory must be present (by default it's created with the `build` task)
- [x] The entrypoint of your code in production **must** be in the `lib/bot.js` file. This file **must** contain an export of a `bot` function named `bot`. It tooks as first argument the body of the request (Bot Connector, custom curl,...)

You can change all other file name, directory structure, but be sure that these tree points work fine!

## More

You can view the whole API reference at [man.recast.ai](https://man.recast.ai).
You can follow us on Twitter at [@recastai](https://twitter.com/recastai) for updates and releases.

## License

Copyright (c) [2017] [Recast.AI](https://recast.ai)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
