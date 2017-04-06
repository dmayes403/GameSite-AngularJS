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

  // getCart: function (req, res){
  //   console.log(req.params);
  //   console.log('hello');
  //   db.run(`select
  // 		    consoles.id
  //         ,consoles.platform
  //         ,consoles.price console_price
  //         ,consoles.releaseDate console_releaseDate
  //         ,consoles.thumbnail console_thumbnail
  //         ,consoles.instock console_instock
  //         ,'consoles' consoles_table
  //         ,consoles.id console_id
  //         ,games.name game_name
  //         ,games.price game_price
  //         ,games.releaseDate game_releaseDate
  //         ,games.thumbnail game_thumbnail
  //         ,games.instock game_instock
  //         ,'games' games_table
  //         ,games.id game_id
  //         ,accessories.name accessory_name
  //         ,accessories.price accessory_price
  //         ,accessories.thumbnail accessory_thumbnail
  //         ,accessories.instock accessory_instock
  //         ,'accessories' accessories_table
  //         ,accessories.id accessory_id
  //         ,customer.firstName
  //         ,customer.lastName
  //         ,customer.email
  //     	from
  //     		cart
  //             LEFT JOIN accessories ON accessories.id = cart.accessory_id
  //             LEFT JOIN games ON games.id = cart.game_id
  //             LEFT JOIN consoles ON consoles.id = console_id
  //             LEFT JOIN customer ON customer.id = customer_id
  //         where customer_id = ${+req.params.customerId}` , function(err, item){
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).send('Internal Server Error')
  //     }
  //     console.log(item);
  //     return res.send(item)
  //   })
  // },



  getCart: function (req, res){
    console.log(typeof req.user.id, parseInt(req.user.id));
    // console.log(req.params);
    // console.log('hello');
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
          ,customer.firstName
          ,customer.lastName
          ,customer.email
      	from
      		cart
              LEFT JOIN accessories ON accessories.id = cart.accessory_id
              LEFT JOIN games ON games.id = cart.game_id
              LEFT JOIN consoles ON consoles.id = console_id
              LEFT JOIN customer ON customer.facebookid = facebook_id
          where customer.facebookid = '${req.user.id}'` , function(err, item){
      if (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
      }
      console.log(item);
      return res.send(item)
    })
  },

  // getFacebookID: function(req, res){
  //   console.log(req.user.id);
  //     res.send(req.user);
  // }

  addToCart: function(req, res){
    db.run(`insert into cart (facebook_id, game_id, console_id) values ('${req.user.id}', ${req.body.itemID}, ${req.body.platformid})`
    , function(err, item){
          if (err) {
            console.log(err);
            return res.status(500).send('Internal Server Error')
          }
          console.log(item);
          })
  },

  deleteCartItem: function(req, res){
    console.log(req.body)
    console.log(req.user.id)
    db.run(`delete from cart
            where
              (accessory_id is null or accessory_id = ${req.body.accessoryID})
              and (game_id is null or game_id = ${req.body.itemID})
              and (console_id is null or console_id = ${req.body.consoleID})
              and facebook_id = '${req.user.id}'`
    , function(err, item){
          if (err) {
            console.log(err);
            return res.status(500).send('Internal Server Error')
          }
          console.log(item);
          })
  }


}
