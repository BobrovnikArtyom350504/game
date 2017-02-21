import { Component } from 'core';



export default class EntityGroup extends Component {
    constructor (entity, ...entities) {
        super(entity);
        this.entities = entities;
    }

    add(...entities) {
        this.entities.concat(entities);
    }

    remove(...entities) {
        for (let entity of entities) {
            let index = this.entities.indexOf(entity);
            if (index == -1)
                this.entities.splice(index, 1);
        }
    }
}
