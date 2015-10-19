var Lunch = require('../models/Lunch');

// GET
function getAll(request, response) {
  Lunch.find(function(error, lunches) {
    if(error) response.json({message: 'Could not find any lunch spots!'});

    response.json({lunches: lunches});
  }).select('-__v');
}

// POST
function createLunch(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var lunch = new Lunch(request.body);

  lunch.save(function(error) {
    if(error) response.json({messsage: 'Couldnt create the lunch spot b/c:' + error});

    response.json({lunch: lunch});
  });
}

// GET
function getLunch(request, response) {
  var id = request.params.id;

  Lunch.findById({_id: id}, function(error, lunch) {
    if(error) response.json({message: 'omg we cant find the lunch spot b/c:' + error});

    response.json({lunch: lunch});
  }).select('-__v');
}

function updateLunch(request, response) {
  var id = request.params.id;

  Lunch.findById({_id: id}, function(error, lunch) {
    if(error) response.json({message: 'Cant find the lunch spot b/c:' + error});

    if(request.body.name) lunch.name = request.body.name;
    if(request.body.location) lunch.location = request.body.location;
    if(request.body.type) lunch.type = request.body.type;

    lunch.save(function(error) {
      if(error) response.json({messsage: 'Couldnt update lunch spot b/c:' + error});

      response.json({message: 'Lunch spot successfully updated', lunch: lunch});
    });
  }).select('-__v');
}

function removeLunch(request, response) {
  var id = request.params.id;

  Lunch.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Couldnt delete the Lunch spot because:' + error});

    response.json({message: 'Lunch sadly deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createLunch: createLunch,
  getLunch: getLunch,
  updateLunch: updateLunch,
  removeLunch: removeLunch
}