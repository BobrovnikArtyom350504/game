import { Component } from 'core';



export default class EventBus extends Component {
    constructor (entity, events) {
        super(entity);
        this.handlers = {};
        for (let event of events) this.handlers[event] = [];
    }

    on(event, ...handlers) {
        this.handlers[event].concat(handlers);
    }

    off(event, handler) {
        if (handler) {
            let index = this.handlers[event].indexOf(handler);
            if (index == -1)
                this.handlers[event].splice(index,1);
        } else
            this.handlers[event] = [];
    }

    invoke(event, args) {
        for (handler of this.handlers[event])
            handler(args);
    }
}
