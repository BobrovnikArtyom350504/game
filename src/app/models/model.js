'use strict';

import LSDB from '../vendor/lsdb.js';
import $ from 'jquery';

export default class Model {
    constructor(id) {
        if (typeof(id) !== 'undefined') {
            if (typeof(this.constructor.table.findWhere({id: id})) === 'undefined') throw new Error('No model with same id.');
        } else {
            this.constructor.table.insert(
                Object.assign({}, this.constructor.image)
            );
            id = this.constructor.table._lastId;
        }

        Object.defineProperty(this, 'id', {
            value: id,
            writeable: false,
            configurable: false
        });
    }

    static all() {
        return $.map(
            this.table.all(),
            (row) => {
                return new this(row.id);
            }
        );
    }

    static where(props) {
        return $.map(
            this.table.where(props),
            (row) => {
                return new this(row.id);
            }
        );
    }

    static setTable(name) {
        Object.defineProperty(this, 'table', {
            value: new LSDB.Table(name),
            writeable: false,
            configurable: false
        });
    }

    static setImage(image) {
        Object.defineProperty(this, 'image', {
            value: image,
            writeable: false,
            configurable: false
        });

        for (let prop in image) {
            Object.defineProperty(this.prototype, prop, {
                get: function() {
                    return this.constructor.table.findWhere({
                        id: this.id
                    })[prop];
                },
                set: function(value) {
                    let row = {id: this.id};
                    row[prop] = value;
                    this.constructor.table.update(row, 'id');
                }
            });
        }
    }
}
