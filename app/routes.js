const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
module.exports = {
     bind: function (app) {
          app.get('/', function (req, res) {
               res.render('index')
          })
          app.get('/favourites-V1/:compName', function (req, res) {
               var compName = req.params.compName;
               res.render('favourites-V1/' + compName , {id: req.query.id, type: req.query.type})
          })
          app.get('/favourites-V2/:compName', function (req, res) {
               var compName = req.params.compName;
               res.render('favourites-V2/' + compName , {id: req.query.id, type: req.query.type})
          })
     }
}

module.exports = router
