import { Component } from 'core';
import { Record } from 'core/utils';



export default class Model extends Component {
    constructor (entity, tableName, name, initState) {
        super(entity);
        this.record = new Record(tableName, name);
        if(this.record.isEmpty())
            this.record.createOrUpdate(initState);
        let row = this.record.read();
        this.propsForSave = [];
        for (let prop in row) {
            this[prop] = row[prop];
            this.propsForSave.push(prop);
        }
    }

    save() {
        let data = {};
        for (let prop of this.propsForSave)
            data[prop] = this[prop];
        this.record.createOrUpdate(data);
    }
}
