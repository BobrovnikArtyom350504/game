export default class Scene {
    constructor(root) {
        this.entities = [];
    }

    create() {
        for (let entity of this.entities) entity.create();
    }
    destroy() {
        while (this.entities.length > 0) this.entities.pop().destroy();
    }

    start() { }
    stop() { }

    pause() { }
    resume() { }

    update() {
        for (let entity of this.entities) entity.update();
    }
}
