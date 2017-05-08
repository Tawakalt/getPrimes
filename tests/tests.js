// testing code goes here

'use strict';

const myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return [] as prime numbers between 1 and 1", function() {
    expect(myApp.getPrimes(1)).toEqual([]);
  })
  it("should return [] as prime numbers between 1 and 0", function() {
    expect(myApp.getPrimes(0)).toEqual([]);
  })
  it("should return [2] as prime numbers between 1 and 2", function() {
    expect(myApp.getPrimes(2)).toEqual([2]);
  })
  it("should return [2,3] as prime numbers between 1 and 3", function() {
    expect(myApp.getPrimes(3)).toEqual([2,3]);
  })
  it("should return [2,3,5] as prime numbers between 1 and 5", function() {
    expect(myApp.getPrimes(5)).toEqual([2,3,5]);
  })
  it("should return [2,3,5,7,9] as prime numbers between 1 and 10", function() {
    expect(myApp.getPrimes(10)).toEqual([2,3,5,7,9]);
  })
})
