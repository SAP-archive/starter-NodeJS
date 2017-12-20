<p align="center">
  <img src="https://cdn.recast.ai/blog/sdk.png" />
</p>

| [Usage](#usage) | [Documentation](#documentation) | [Getting Started on Recast.AI]( #getting-started-with-recastai) | [License](#license) |
|---|---|---|---|

<div>
<a href="https://slack.recast.ai/">💬 Questions / Comments? Join the discussion on our community Slack channel!</a>
</div>

# Recast.AI starter kit NodeJS

A starter kit for developing bots on the [Recast.AI](https://recast.ai) platform.

> **Note:** This project is currently in beta version and can be modified at any time.

## Requirements

#### Node version

We recommend to use at least `node v6


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

#### Run locally

using npm `npm start`

using yarn `yarn start`

- download [ngrok](https://ngrok.com/)
- launch it: `./ngrok http 5000`
- copy the url ngrok gave and paste it in the [Recast.AI](https://recast.ai) interface: Go to your bot page, click on the **RUN** tab and edit your `current bot webhook`
- Chat with your bot on the channels you've configured ;)

## Documentation

Code | Documentation
------------ | -------------
Receiving messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Sending messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Rich messaging | See the different [payload message](https://man.recast.ai)

#### About your config file

The `src/config.js` file will never be pushed to your repository, to keep your configuration private.

## More

You can view the whole API reference at [man.recast.ai](https://man.recast.ai).
You can follow us on Twitter at [@recastai](https://twitter.com/recastai) for updates and releases.

## Getting started with Recast.AI

We build products to help enterprises and developers have a better understanding of user inputs.

-   **NLP API**: a unique API for text processing, and augmented training.
-   **Bot Building Tools**: all you need to create smart bots powered by Recast.AI's NLP API. Design even the most complex conversation flow, use all rich messaging formats and connect to external APIs and services.
-   **Bot Connector API**: standardizes the messaging format across all channels, letting you connect your bots to any channel in minutes.

Learn more about:

| [API Documentation](https://recast.ai/docs/api-reference/) | [Discover the platform](https://recast.ai/docs/create-your-bot) | [First bot tutorial](https://recast.ai/blog/build-your-first-bot-with-recast-ai/) | [Advanced NodeJS tutorial](https://recast.ai/blog/nodejs-chatbot-movie-bot/) | [Advanced Python tutorial](https://recast.ai/blog/python-cryptobot/) |
|---|---|---|---|---|

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
