import { Scene, Entity } from 'core';

import {
    PhysicsComponent,
    GraphicsComponent,
    LoggerComponent
} from 'game/components';



export default class MainMenuScene extends Scene {
    create() {
        let circle = new Entity([
            PhysicsComponent,
            GraphicsComponent,
            LoggerComponent
        ]);
        this.entities.push(circle);
        super.create();
    }
}
