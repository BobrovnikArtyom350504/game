'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class Game {
    constructor(root, ...sceneClasses) {
        if (!this.constructor.instance) {
            this.constructor.instance = this;
        }
        this.constructor.instance.root = root;
        this.constructor.instance.scenes = {};
        this.constructor.instance.sceneStack = [];
        for (let sceneClass of sceneClasses)
            this.constructor.instance.addScene(sceneClass);
        return this.constructor.instance;
    }

    start(initialScene) {
        this.render(initialScene.view);
        this.sceneStack.push(initialScene);
        this.scenes[initialScene].start();
        this.timer = setInterval(() => {
            this.scenes[
                this.sceneStack[this.sceneStack.length - 1]
            ].update();
        }, 500);
    }

    addScene(sceneClass) {
        this.scenes[sceneClass] = new sceneClass();
    }

    deleteScene(sceneClass) {
        this.scenes[sceneClass].destroy();
        delete this.scenes[sceneClass];
    }

    changeScene(sceneClass) {
        this.scenes[
            this.sceneStack.pop()
        ].stop();
        this.render(sceneClass.view);
        this.sceneStack.push(sceneClass);
        this.scenes[sceneClass].start();
    }

    pushScene(sceneClass) {
        this.scenes[
            this.sceneStack[this.sceneStack.length - 1]
        ].pause();
        this.render(sceneClass.view);
        this.sceneStack.push(sceneClass);
        this.scenes[sceneClass].start();
    }

    popScene() {
        this.scenes[this.sceneStack.pop()].stop();
        this.render(this.sceneStack[this.sceneStack.length - 1].view);
        this.scenes[
            this.sceneStack[this.sceneStack.length - 1]
        ].resume();
    }

    resetSceneStack(sceneClass) {
        while (this.sceneStack.length > 0)
            this.scenes[this.sceneStack.pop()].stop();
        this.render(sceneClass.view);
        this.sceneStack.push(sceneClass);
        this.scenes[sceneClass].start();
    }

    render(view) {
        ReactDOM.render(React.createElement(view, null), this.root);
    }
}
