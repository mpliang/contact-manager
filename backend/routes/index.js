var express = require('express');
var router = express.Router();

var Contact = require('../models/contact')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Contact.find(function(err, data){
    console.log(data);
    res.send(data);
  });
});
router.get('/:contactId', function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact){
    console.log('test');
    res.send(contact);
  });
});


router.delete('/:contactId', function(req, res) {
  Contact.findByIdAndRemove(req.params.contactId, function(err, deletedContact){
    res.status(err ? 400 : 200).send(err || deletedContact)
  });
});


router.post('/', function(req, res, next) {
  Contact.create(req.body, function(err,savedContact){
    res.status(err ? 400 : 200).send(err || savedContact);
  });
});

router.put('/:contactId', function(req,res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    console.log('body: ', req.body);
    console.log('contact: ', contact);
    contact = req.body;
    contact.save(function(err, savedContact) {
      res.send(savedContact);
    });
  });
});

module.exports = router;
