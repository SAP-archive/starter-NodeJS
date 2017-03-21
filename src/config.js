module.exports = {
 port: process.env.PORT || '5000',
 recast: {
   token: process.env.REQUEST_TOKEN || '7be658c25cd312c99c24af00540f8697',
   language: process.env.RECAST_LANGUAGE || 'en',
 },
}
