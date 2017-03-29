const app = require('../index');
const db = app.get('db');

module.exports = {
  getTrendingGames: function(req, res){
    db.get_trending_games(function(err, games){
      console.log(err, games)
      res.send(games);
    })
  },

  getGames: function(req, res){
    // console.log(req.params);
    console.log(req.query);
    db.get_games([+req.query.platformid], function(err, games){
      if (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      // console.log(games);
      return res.send(games);
    })
  }


}
