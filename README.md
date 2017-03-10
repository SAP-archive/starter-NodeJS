# Starter kit NodeJs

## Requirements

`node v4.0.0`

## Usage

#### Installation

`git clone && cd recast-ai-bot`


using npm
`npm install`

or yarn
`yarn`

#### create the config file

 create a `config.js` file at the root of your project

 and paste and complete these lines

 ```
 module.exports = {
  port: process.env.PORT || '5000',
  recast: {
    token: process.env.RECAST_TOKEN || '',
    language: process.env.RECAST_LANGUAGE || '',
  },
}
```

#### Run

using npm `npm start`

using yarn `yarn start`

#### Best practices



## How your code will be deployed?
