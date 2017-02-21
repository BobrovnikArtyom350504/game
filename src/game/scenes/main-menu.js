import $ from 'jquery';

import { Scene, Entity, Component, view } from 'core';

import { GameScene } from 'game/scenes';



@view($(require('game/views/main-menu.html')))
class MainMenuScene extends Scene {
    create() {
        this.entities.push(
            new Entity((() => {
                const scene = this;
                return class extends Component {
                    play() {
                        window.game.changeScene(GameScene);
                    }
                    create() {
                        scene.constructor.view.find('[data-action=play]').on('click', this.play);
                    }
                    destroy() {
                        scene.constructor.view.find('[data-action=play]').off('click', this.play);
                    }
                }
            })())
        );

        super.create();
    }
}

export default MainMenuScene
