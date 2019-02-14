'use strict';

const base = require('wod-data-base');
const disciplines = require('./data/advantages/disciplines.json');
const virtues = require('./data/advantages/virtues.json');
const vampireFlaws = require('./data/flaws/vampireFlaws.json');
const vampireMerits = require('./data/merits/vampireMerits.json');
const paths = require('./data/paths.json');

const vampData = JSON.parse(JSON.stringify(base));
vampData.disciplines = disciplines;
vampData.virtues = virtues;

vampData.merits.vampireMerits = vampireMerits;
vampData.flaws.vampireFlaws = vampireFlaws;
vampData.paths = paths;

module.exports = vampData;
