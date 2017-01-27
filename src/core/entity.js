'use strict';

export default class Entity {
    constructor(...componentClasses) {
        this.components = {};
        for (let componentClass of componentClasses) this.addComponent(componentClass);
    }

    addComponent(componentClass) {
        this.components[componentClass] = new componentClass(this);
    }

    deleteComponent(componentClass) {
        delete this.components[componentClass];
    }
}
