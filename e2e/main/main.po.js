/*global element, by*/
'use strict';

var MainPage = function () {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
};

module.exports = MainPage;
