'use strict';

import '../styles/main.scss';

import UnitModel from './models/unit.js'

window.warrior = new UnitModel({level: 2, type: 'warrior'});
window.mage = new UnitModel({type: 'warrior'});
