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

 ```
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

#### Run

using npm `npm start`

using yarn `yarn start`

#### Best practices



## How does it works?

## How your code will be deployed?
