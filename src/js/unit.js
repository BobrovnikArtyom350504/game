'use strict';
import Model from './model.js'

export default class Unit extends Model {

    constructor(id, data) {
        let structure = {
            type: '',
            abilities: {},
            lvl: 0,
        };

        super(structure, Unit.tableName, id);
    }
}
Unit.tableName = 'units';