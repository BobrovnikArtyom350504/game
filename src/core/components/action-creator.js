import { Component } from 'core';



export default class ActionCreator extends Component {
    constructor (entity, eventBus) {
        super(entity);
        this.eventBus = eventBus;
    }
}
