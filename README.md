# Recast.AI starter kit NodeJS

A starter kit for developing bots on the [Recast.AI](https://recast.ai) platform.

> **Note:** This project is currently in beta version and can be modified at any time.

## Requirements

#### Node version

We recommend to use at least `node v4.3.0`


#### Recast.AI account

Create an account on the [Recast.AI](https://recast.ai) platform and follow this [quick tutorial](https://recast.ai/gettingstarted) to create your first bot on the interface.

## Usage


#### Installation

`git clone https://github.com/RecastAI/starter-NodeJS.git my-bot && cd my-bot`

using npm
`npm install`

or yarn
`yarn`


#### Create the config file

 Create a `config.js` file in the `src` directory of your project, copy/paste these lines:

```javascript
process.env.PORT = '5000'
process.env.REQUEST_TOKEN = ''
process.env.LANGUAGE = ''
// Write your own configuration here:
// ...
```

Complete the Recast.AI `process.env.REQUEST_TOKEN` and `process.env.LANGUAGE`: go to your bot page, click on the settings icon (on the right side of your screen), and copy the `request_token`.
Then, set the default language of your bot: `'en'`, `'fr'`... or leave this field empty for auto-detection language

Tips: This config. file will never be pushed onto your repository. If you would like to deploy your code with **Bot Hosting**, you just have to create env. variables in **Bot Hosting** section in **RUN** page. More info in [About your config. file](https://github.com/RecastAI/starter-NodeJS#about-your-config-file)


#### Run locally

using npm `npm start`

using yarn `yarn start`

> **Note:** Next steps, only if you have connected your bot to channels, using the Bot Connector tool

- download [ngrok](https://ngrok.com/)
- launch it: `./ngrok http 5000`
- copy the url ngrok gave and paste it in the [Recast.AI](https://recast.ai) interface: Go to your bot page, click on the **RUN** tab and edit your `current bot webhook`
- Chat with your bot on the channels you've configured ;)

#### Alternative, if you are not using **Bot Connector**

If you're not using the Bot Connector to connect your bot to the channels, you will only need to change the `bot.js` file and the `message.js` file and make changes depending on the way you want to receive the message.

## Documentation

Code | Documentation
------------ | -------------
Receiving messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Sending messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Rich messaging | See the different [payload message](https://man.recast.ai)
Manage the conversation | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - converse


## How your code will be deployed?

To host your bot and deploy your code, create a repository on Github, and push this code on it.
Connect your github account on Recast:

- Go to your bot page
- Click on the **RUN** tab, and on the **Bot Hosting** menu
- Connect your Github account
- Select the repository you've just created
- Wait a little, we're starting your instance...

Every time you will push onto the master branch, we'll deploy your code 👏

#### Requirements

Since we deploy your code in generic containers, there are 3 requirements:

- [x] Your package.json **must** contain the `build` task. It must be present even if empty or just copying files. The default one you will find in the starter kit is `"build": "babel src -d lib"` to compile your Javascript. So you can code with your favorite ES6, ES7 features :thumbsup:
- [x] A lib directory must be present (by default it's created with the `build` task)
- [x] The entrypoint of your code in production **must** be in the `lib/bot.js` file. This file **must** contain an export of a `bot` function named `bot`. It takes as the first argument the body of the request (Bot Connector, custom curl,...)

You can change all other file names, directory structures, but be sure that these three points work fine!

#### About your config. file

The `src/config.js` file will never be pushed to your repository, to keep your configuration private.

To set up your local env. variables in **Bot Hosting**, you have to create env. variables in **Bot Hosting** section in the **RUN** page.

`PORT` env. variable is not needed. **Bot Hosting** manages it for you :)

`REQUEST_TOKEN` and `LANGUAGE` env. variables are already set up with your bot configuration. `LANGUAGE` can be customised with the one you want (`en`, `fr`, ...)

You can add any env. variable you want in the **Bot Hosting** section and then use it in your code with this syntax: `process.env.MY_ENV_VAR_NAME`

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
