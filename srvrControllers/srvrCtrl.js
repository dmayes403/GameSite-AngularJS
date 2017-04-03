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
      ,consoles.price console_price
      ,consoles.releaseDate console_releaseDate
      ,consoles.thumbnail console_thumbnail
      ,consoles.instock console_instock
      ,'consoles' consoles_table
      ,consoles.id console_id
      ,games.name game_name
      ,games.price game_price
      ,games.releaseDate game_releaseDate
      ,games.thumbnail game_thumbnail
      ,games.instock game_instock
      ,'games' games_table
      ,games.id game_id
      ,accessories.name accessory_name
      ,accessories.price accessory_price
      ,accessories.thumbnail accessory_thumbnail
      ,accessories.instock accessory_instock
      ,'accessories' accessories_table
      ,accessories.id accessory_id
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
