const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
module.exports = {
     bind: function (app) {
          app.get('/', function (req, res) {
               res.render('index')
          })
          app.get('/sprint-11/:compName', function (req, res) {
               var compName = req.params.compName;
               res.render('sprint-11/' + compName , {id: req.query.id, type: req.query.type})
          })
          app.get('/sprint-12/:compName', function (req, res) {
               var compName = req.params.compName;
               res.render('sprint-12/' + compName , {id: req.query.id, type: req.query.type})
          })
          app.get('/sprint-13/:compName', function (req, res) {
               var compName = req.params.compName;
               res.render('sprint-13/' + compName , {id: req.query.id, type: req.query.type})
          })
          app.get('/sprint-14/:compName', function (req, res) {
               var compName = req.params.compName;
               res.render('sprint-14/' + compName , {id: req.query.id, type: req.query.type})
          })
          app.get('/sprint-15/:compName', function (req, res) {
               var compName = req.params.compName;
               res.render('sprint-15/' + compName , {id: req.query.id, type: req.query.type})
          })
          app.get('/sprint-17/:compName', function (req, res) {
               var compName = req.params.compName;
               res.render('sprint-17/' + compName , {id: req.query.id, type: req.query.type})
          })
     }
}

module.exports = router


// Employer started
router.get('/directEmployer', function (req, res) {
     res.redirect(`/sprint-17/V4/shopping-basket`)
})
