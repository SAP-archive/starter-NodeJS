module.exports = {
  port: process.env.PORT || '5000',
  mongo: {
    hostname: process.env.MONGO_HOSTNAME || 'localhost',
    name: process.env.MONGO_NAME || '',
    username: process.env.MONGO_USERNAME || '',
    password: process.env.MONGO_PASSWORD || '',
    ssl: process.env.MONGO_SSL || 'false',
    port: process.env.MONGO_PORT || '27017',
  },
  recast: {
    token: process.env.RECAST_TOKEN || '',
    language: process.env.RECAST_LANGUAGE || '',
  },
}
