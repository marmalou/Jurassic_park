const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {

  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50 )
  });

  it('should have a collection of dinosaurs', function  (){
    const actual = park.collectionOfDinasaurs;
    assert.strictEqual(actual, 'carnivores')
  });

  it('should be able to add a dinosaur to its collection',function (){
    const actual = park.addDinosaur;
    assert.strictEqual(park.addDinosaur, expected)
});

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaurFromCollection(dinosaur1);
    const expected = 0;
    assert.strictEqual(park.calculateAmountOfDinosaursInTheCollection(), expected);
  });



  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.findDinosaurThatAttractsMostVisitors;
    const expected = 'T-Rex';
    assert.strictEqual(park.findDinosaurThatAttractsMostVisitors(),expected)
  });

  it('should be able to find all dinosaurs of a particular species', function (){
    park.findAllDinosaursOfASpecies;
    const expected = 'Stegosauraus';
    assert.strictEqual(park.findAllDinosaursOfASpecies(),expected)
  });

  it('should be able to remove all dinosaurs of a particular species', function (){
   park.removeAllDinosaursOfAParticularSpecies;
   const expected = 'hobligobs';
   assert.strictEqual(park.removeAllDinosaursOfAParticularSpecies() expected)
  });

});
