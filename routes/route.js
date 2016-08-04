var express = require('express');
var router = express.Router();

// GET TEST!
router.get('/note', function(req, res){
  var responseObject = { message: 'OK' };
  res.send(responseObject);
});

// JSON data storage -- not a real database.
var data = [
    {
        id: 0,
        body: 'Foo'
    }
];

// GET ALL
router.get('/notes', function(req, res){
  res.send(data);
});

// GET individual
router.get('/notes/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var result = data.filter(r => r.id === id)[0];
    
    if (!result) {
       res.sendStatus(404); 
    } else {
        res.send(result);
    }
});

// POST http://localhost:3000/notes
// parameters sent with
router.post('/notes', function(req, res){
    var item = req.body;
    if (!item.id) {
        return res.sendStatus(500);
    }
    data.push(item);
    res.send('/notes/ ' + item.id);
});

// PUT
router.put('/notes/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var existingItem = data.filter(r => r.id === id)[0];
    
    if(!existingItem) {
        var item = req.body;
        item.id = id;
        data.push(item);
        res.setHeader('Location', '/notes/' + id);
        res.sendStatus(201);
    } else {
        existingItem.body = req.body.body;
        res.sendStatus(204);
    }
});

// DELETE
router.delete('/notes/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var existingItem = data.filter(r => r.id === id)[0];
    if (!existingItem) {
        return res.sendStatus(404);
    }
    
    data = data.filter(r => r.id !== id);
    res.sendStatus(204);
});

module.exports = router;
