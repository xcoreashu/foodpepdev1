const express = require('express');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const restaurants = mongoose.model('restaurants');
module.exports = (app) => {
  app.post('/restaurants',(req,res) => {
const restaurant = req.body;

Restaurants.create(
  restuarant , function(err,restaurants){
    if (err) {
      throw err;
    }
    res.json(restaurants);
  })
});

app.get('/restaurants' , function(req,res){
  Restaurants.find(function(err,restaurants){
    if (err) {
    throw err;

  }
  res.json(restaurants);

})
});
app.delete('/restaurants/:_id',function(req,res){
  var query = {_id: req.params._id};

  Restaurants.remove(query , function(err,restaurants){
    if (err) {
      throw err;
    }
    res.json(restaurants);
  })
});

app.put('/restaurants/:_id',function(req,res){
  var restaurant = req.body;
  var query = {_id:req.params._id};
  // if the field doesnt exist $set will set up a new field
  var update  = {
    '$set': {
      title:restaurant.title,
      description:restaurant.description,
      image:restaurant.image,
      price:restaurant.price
    }
  };
  // when true returns the update ddocument
  var options = {new: true};
  Restaurants.findOneAndUpdate(query,update,options,function(err,restaurants){
    if (err) {
      throw err;
    }
    res.json(restuarants);
  })
});
}
