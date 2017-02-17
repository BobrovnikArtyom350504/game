export default class Entity {
    constructor(components = []) {
        this.components = {};
        for (let component of components)
            this.addComponent(component);
    }

    addComponent(component) {
        if (typeof component == 'function') component = new component(this.components);
        this.components[component.constructor] = component;
    }

    deleteComponent(componentClass) {
        delete this.components[componentClass];
    }

    create() {
        for (let component of Object.values(this.components)) component.create();
    }

    destroy() {
        for (let component of Object.values(this.components)) component.destroy();
    }

    update() {
        for (let component of Object.values(this.components)) component.update();
    }
}
