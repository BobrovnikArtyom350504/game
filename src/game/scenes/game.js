import $ from 'jquery';

import { Scene, Component, Entity, view } from 'core';

import { MainMenuScene } from 'game/scenes';



@view($(require('game/views/game.html')))
class GameScene extends Scene {
    create() {
        this.entities.push(
            new Entity((() => {
                const scene = this;
                return class extends Component {
                    quit() {
                        window.game.changeScene(MainMenuScene);
                    }
                    create() {
                        scene.constructor.view.find('[data-action=quit]').on('click', this.quit);
                    }
                    destroy() {
                        scene.constructor.view.find('[data-action=quit]').off('click', this.quit);
                    }
                }
            })())
        );

        super.create();
    }
}

export default GameScene
