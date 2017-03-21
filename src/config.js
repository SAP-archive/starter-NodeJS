module.exports = {
 port: process.env.PORT || '5000',
 recast: {
   token: process.env.REQUEST_TOKEN || '',
   language: process.env.RECAST_LANGUAGE || 'en',
 },
}
