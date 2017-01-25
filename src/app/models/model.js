'use strict';

import LSDB from '../vendor/lsdb.js';
import $ from 'jquery';

export default class Model {
    constructor(props, name) {
        if (typeof(name) !== 'undefined') {
            if (typeof(this.constructor.table.findWhere({this.constructor.table._defaultUniqueKey: name})) === 'undefined') throw new Error('No model with same id or name.');
        } else if (this.constructor.table._isUniqueKeyEnumerable) {
            this.constructor.table.insert(
                Object.assign({}, this.constructor.image, props)
            );
            name = this.constructor.table._last;
        } else throw new Error('Name isnt enumerable pls set name.');

        Object.defineProperty(this, this.constructor.table._defaultUniqueKey, {
            value: name,
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

    static defineClass(tableName, image, decoratedClass=class extends Model{}) {
        decoratedClass.setTable(tableName);
        decoratedClass.setImage(image);
        return decoratedClass;
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
