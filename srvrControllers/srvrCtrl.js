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
    db.get_xbox_one_games(function(err, games){
      console.log(err, games)
      res.send(games);
    })
  }


}
