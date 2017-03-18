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

#### Documentation

Code | Documentation
------------ | -------------
Receiving messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Sending messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Rich messaging | See the different [payload message](https://man.recast.ai)
Manage the conversation | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - converse

## How does it works?





## How your code will be deployed?
