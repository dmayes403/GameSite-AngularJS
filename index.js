const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const facebookConfig = require('./config');
const port = 3333;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({secret: 'some-rando-string'}))
app.use(express.static('public'))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new FacebookStrategy(facebookConfig, function(token, refreshToken, profile, done){

  return done(null, profile)
}))

app.get('/auth/facebook', passport.authenticate('facebook'))
// app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email' ] }))
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/#!/',                   //   '/!#/me' <--- use with ui-router pound sign and exclamation point might need to be swtiched around
  failureRedirect: '/#!/'         //   '/!#/auth/facebook' <--- use with ui-router pound sign and exclamation point might need to be swtiched around
}), function(req, res){
  console.log(req.session)
})
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.listen(port, () => {
  console.log(`Connected on port: ${port}`)
})

const connectionString = "postgres://dmayes@localhost/GameSite";
const massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance);

module.exports = app;

const controller = require('./srvrControllers/srvrCtrl.js')
app.get('/getTrendingGames', controller.getTrendingGames);
app.get('/getGames', controller.getGames);
app.get('/getAccessories', controller.getAccessories);
app.get('/getConsoles', controller.getConsoles);
app.get('/getIndividualItem', controller.getIndividualItem);
app.get('/userSearch/:searchString', controller.userSearch);
// app.get('/getCart/:customerId', controller.getCart);
// app.get('/getFacebookID', controller.getFacebookID);
app.get('/getCart', controller.getCart);
