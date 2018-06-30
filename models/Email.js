const mongoose = require('mongoose');

const { Schema } = mongoose;

const emailSchema = new Schema({
  email: String
});
module.exports = emailSchema;
