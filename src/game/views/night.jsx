'use strict';

import React from 'react';

import Game from 'core/game.js';

import DayScene from 'game/scenes/day.js';
import PauseScene from 'game/scenes/pause.js';
import MainMenuScene from 'game/scenes/main-menu.js';


export default class NightView extends React.Component {
    render() {
        return <div>
            <h1>Night</h1>
            <button
                onClick={ () => Game.instance.changeScene(DayScene) }
            >Go to day</button>
            <button
                onClick={ () => Game.instance.pushScene(PauseScene) }
            >Pause</button>
            <button
                onClick={ () => Game.instance.changeScene(MainMenuScene) }
            >Quit</button>
        </div>;
    }
}
