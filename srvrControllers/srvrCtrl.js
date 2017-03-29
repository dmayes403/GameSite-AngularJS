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
    // db.get_games([+req.query.platformid], function(err, games){
    db.run(`select * from ${req.query.item} where platformid = ${req.query.platformid}`, function(err, games){
      if (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      // console.log(games);
      return res.send(games);
    })
  },

  getAccessories: function(req, res){
    console.log(+req.query.platformid)
    db.get_accessories([+req.query.platformid], function(err, accessories){
      if (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      console.log(accessories);
      return res.send(accessories)
    })
  }


}
