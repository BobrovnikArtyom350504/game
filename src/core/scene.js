'use strict';

import Game from 'core/game.js';

export default class Scene {
    start() { }
    destroy() { }
    stop() { }
    pause() { }
    resume() { }
    update() { }

    static setView(view) {
        this.view = view;
        return this;
    }
}
