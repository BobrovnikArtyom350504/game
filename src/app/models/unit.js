'use strict';

import Model from './model.js'

export default class Unit extends Model { }
Unit.setTable('units');
Unit.setImage({
    type: '',
    abilites: [],
    level: 1
});
