import Game from 'core/game';

import { MainMenuScene } from 'game/scenes';



(window.game = new Game('root', [MainMenuScene])).start(MainMenuScene);
