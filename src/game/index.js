import Game from 'core/game';

import { MainMenuScene, GameScene } from 'game/scenes';



(window.game = new Game('body', [MainMenuScene, GameScene])).start(MainMenuScene);
