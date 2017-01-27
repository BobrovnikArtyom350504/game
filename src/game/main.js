'use strict';

import Game from 'core/game.js';

import MainMenuScene from 'game/scenes/main-menu.js';
import DayScene from 'game/scenes/day.js';
import NightScene from 'game/scenes/night.js';
import PauseScene from 'game/scenes/pause.js';

let root = document.createElement('div');
root.setAttribute('id', 'root');

(window.game = new Game(
    document.body.appendChild(root),
    MainMenuScene,
    DayScene,
    NightScene,
    PauseScene
)).start(MainMenuScene);
