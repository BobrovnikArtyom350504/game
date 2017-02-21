export default class Entity {
    constructor(...components) {
        this.components = {};
        for (let component of components)
            this.addComponent(component);
    }

    addComponent(component) {
        if (typeof component == 'function') component = new component(this);
        this.components[component.constructor.name] = component;
    }

    deleteComponent(componentClass) {
        this.components[componentClass.name].destroy();
        delete this.components[componentClass.name];
    }

    findComponentOf(baseClass) {
        return Object.values(this.components).find(component => component instanceof baseClass);
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
