module.exports = {
  port: '5000',
  mongo: {
    hostname: 'localhost',
    name: '',
    username: '',
    password: '',
    ssl: 'false',
    port: '27017',
  },
  connector: {
    botId: 'connectorBotId',
    userSlug: 'connectorUserSlug',
    userToken: 'connectorUserToken',
  },
  recast: {
    token: 'recastToken',
    language: 'recastBotLanguage',
  },
}
