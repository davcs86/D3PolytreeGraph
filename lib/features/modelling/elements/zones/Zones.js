'use strict';

var inherits = require('inherits'),
  base = require('../base')//,
  ;//isUndefined = require('lodash/lang').isUndefined;

function Zones(definitions, moddle, zones) {
  base.call(this, definitions, zones);
  this._moddle = moddle;
  this._zones = zones;
}

Zones.$inject = [
  'd3polytree.definitions',
  'd3polytree.moddle',
  'zones'
];

module.exports = Zones;

inherits(Zones, base);

Zones.prototype.create = function () {
  console.error("TODO: Do it!");
};