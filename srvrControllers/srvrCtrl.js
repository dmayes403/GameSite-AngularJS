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
  },

  userSearch: function (req, res){
    console.log('-------------%%-----------------%%-------------')
    console.log(req.params.searchString)

    db.run(`select
		consoles.id
        ,consoles.platform
        ,consoles.price
        ,consoles.releaseDate
        ,consoles.thumbnail
        ,games.name
        ,games.price
        ,games.releaseDate
        ,games.thumbnail
        ,accessories.name
        ,accessories.price
        ,accessories.thumbnail
  	from
  		consoles
          left JOIN games ON games.platformid = consoles.id and upper(games.name) like '%${req.params.searchString}%'
          left JOIN accessories ON accessories.platformid = consoles.id and upper(accessories.name) like '%${req.params.searchString}%'
       where (upper(consoles.platform) like '%${req.params.searchString}%' or upper(accessories.name) like '%${req.params.searchString}%' or upper(games.name) like '%${req.params.searchString}%')`
      , function(err, items){
      if (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      console.log(items);
      return res.send(items)
    })
  },


}
