'use strict';
import Model from './model.js'

export default class Cell extends Model {

    constructor(id) {
        let structure = {
            type: '',
            x: 0,
            y: 0
        };
        super(structure, Cell.tableName, id);
    }
}
Cell.tableName = 'cells';