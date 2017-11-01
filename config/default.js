module.exports = {
  port: 3008,
  session: {
    secret: 'node-app',
    key: 'node-app',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
};