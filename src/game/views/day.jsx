'use strict';

import React from 'react';

import Game from 'core/game.js';

import NightScene from 'game/scenes/night.js';
import PauseScene from 'game/scenes/pause.js';
import MainMenuScene from 'game/scenes/main-menu.js';


export default class DayView extends React.Component {
    render() {
        return <div>
            <h1>Day</h1>
            <button
                onClick={ () => Game.instance.changeScene(NightScene) }
            >Go to night</button>
            <button
                onClick={ () => Game.instance.pushScene(PauseScene) }
            >Pause</button>
            <button
                onClick={ () => Game.instance.changeScene(MainMenuScene) }
            >Quit</button>
        </div>;
    }
}
