const app = require('../index');
const db = app.get('db');

module.exports = {
  getTrendingGames: function(req, res){
    db.get_trending_games(function(err, games){
      // console.log(err, games)
      res.send(games);
    })
  },

  getGames: function(req, res){
    // db.get_games([+req.query.platformid], function(err, games){
    db.run(`select * from ${req.query.item} where platformid = ${req.query.platformid} limit 12`, function(err, games){
      if (err) {
        // console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      // console.log(games);
      return res.send(games);
    })
  },

  getAccessories: function(req, res){
    db.get_accessories([+req.query.platformid], function(err, accessories){
      if (err) {
        // console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      // console.log(accessories);
      return res.send(accessories)
    })
  },

  getConsoles: function (req, res){
    db.get_consoles(function(err, consoles){
      if (err) {
        // console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      // console.log(consoles);
      return res.send(consoles)
    })
  },

  getIndividualItem: function (req, res){
    console.log(req.query);
    db.run(`select * from ${req.query.tableName} where id = ${+req.query.itemid}`, function(err, item){
      if (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      console.log(item);
      return res.send(item)
    })
  }


}
