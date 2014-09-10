module.exports = {
  yelpKey: process.env.YELP_KEY,
  yelpSecret: process.env.YELP_SECRET,
  yelpToken: process.env.YELP_TOKEN,
  yelpTokenSecret: process.env.YELP_TOKEN_SECRET,
  mysql: {
    client: 'mysql',
    connection: {
      host     : process.env.MYSQL_HOST,
      user     : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database : 'nite-out',
      charset  : 'utf8'
    }
  },
  mongodb: process.env.MONGO_URI,
  eventApiKey: process.env.EVENT_API_KEY
};