var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  url: {type: String, default: 'http://awfsfair.org/wp-content/uploads/2011/03/Headshot-Placeholder.png'},
  description: {type: String, default: 'n/a'}
});

// contactSchema.method.toggleAvailable = function(cb) {
//   this.isAvailable = !this.isAvailable;
//   this.save(cb);
// };

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
