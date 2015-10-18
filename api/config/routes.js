var express           = require('express'),
var router            = express.Router(),
var bodyParser        = require('body-parser'), //parses information from POST
var methodOverride    = require('method-override'); //used to manipulate POST

var lunchesController = require('../controllers/lunches');

// http://127.0.0.1:3000/lunches
router.route('/lunches')

  //GET all lunches
  .get(lunchesController.getAll)

  //POST a new lunch
  .post(lunchesController.createLunch);


router.route('/lunches/:id')

  // GET return specific lunch
  .get(lunchesController.getLunch)

  // PATCH update existing lunch
  .patch(lunchesController.updateLunch)

  // PUT update existing lunch
  .put(lunchesController.updateLunch)

  // DELETE remove specific lunch from DB
  .delete(lunchesController.removeLunch);


module.exports = router