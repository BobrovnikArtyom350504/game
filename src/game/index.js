import Game from 'core/game';

import { MainMenuScene, DayScene } from 'game/scenes';



(window.game = new Game('body', [MainMenuScene, DayScene])).start(MainMenuScene);
