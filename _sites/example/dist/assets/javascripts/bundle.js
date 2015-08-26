(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/weslley.araujo/workspace/max-generator/_sites/example/src/assets/javascripts/index.js":[function(require,module,exports){
'use strict';

var isDog = function isDog(x) {
  return x.type === 'dog';
};

var animals = [{ type: 'dog', name: 'Max' }, { type: 'cat', name: 'Toy' }, { type: 'dog', name: 'Awesome' }];

var dogs = animals.filter(isDog);

},{}]},{},["/Users/weslley.araujo/workspace/max-generator/_sites/example/src/assets/javascripts/index.js"]);
