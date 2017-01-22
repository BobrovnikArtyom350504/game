'use strict';
import Table from './table.js';
import $ from 'jquery';

export default class Model {
    constructor(structure, tableName, id) {
        let table = new Table(tableName);
        let objectId = id || table.set(structure).id;
        createMethods.call(this);

        function createMethods() {
            $.each(structure, (property) => {
                createGetter.call(this, property);
                createSetter.call(this, property);
            });
        }

        function createGetter(property) {
            let getterName = 'get' + capitalizeFirstLetter(property);

            this[getterName] = () => {
                let object = table.get({id: objectId})[0];
                let data = object ? object[property] : null;
                return data;
            }
        }

        function createSetter(property) {
            let setterName = 'set' + capitalizeFirstLetter(property);

            this[setterName] = (value) => {
                let data = {id: objectId};
                data[property] = value;
                table.update(data);
            }
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    static all() {
        let data = new Table(this.tableName).all();
        let models = $.map(data, (object, id) => {
            if(id !== 'lastId')
                return new this(id);
            else
                return null;
        });
        return models;
    }

    static get(properties) {
        let data = new Table(this.tableName).get(properties);
        let models = data.map((object) => {
            return new this(object.id);
        });
        return models;
    }
}
