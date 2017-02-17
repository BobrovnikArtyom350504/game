export default class Game {
    constructor(root, scenes) {
        this.root = root;
        this.scenes = {};
        this.sceneStack = [];
        for (let sceneClass of scenes)
            this.addScene(sceneClass, root);
        Object.defineProperty(this, 'lastScene', {
            get: () => this.sceneStack[this.sceneStack.length - 1]
        });
    }

    start(initialScene) {
        this.sceneStack.push(initialScene);
        this.scenes[initialScene].start();
        this.timer = setInterval(this.update.bind(this), 500);
    }

    addScene(scene, root = this.root) {
        if (typeof scene == 'function') scene = new scene(root);
        this.scenes[scene.constructor] = scene;
        scene.create();
    }

    deleteScene(sceneClass) {
        this.scenes[sceneClass].destroy();
        delete this.scenes[sceneClass];
    }

    changeScene(sceneClass) {
        this.scenes[this.sceneStack.pop()].stop();
        this.sceneStack.push(sceneClass);
        this.scenes[sceneClass].start();
    }

    pushScene(sceneClass) {
        this.scenes[this.lastScene].pause();
        this.sceneStack.push(sceneClass);
        this.scenes[sceneClass].start();
    }

    popScene() {
        this.scenes[this.sceneStack.pop()].stop();
        this.scenes[this.lastScene].resume();
    }

    resetSceneStack(sceneClass) {
        while (this.sceneStack.length > 0)
            this.scenes[this.sceneStack.pop()].stop();
        this.sceneStack.push(sceneClass);
        this.scenes[sceneClass].start();
    }

    update() {
        this.scenes[this.lastScene].update();
    }
}
