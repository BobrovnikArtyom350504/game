'use strict';

import React from 'react';

import Game from 'core/game.js';

import MainMenuScene from 'game/scenes/main-menu.js';


export default class PauseView extends React.Component {
    render() {
        return <div>
            <h1>Pause</h1>
            <button
                onClick={ () => Game.instance.popScene() }
            >Play</button>
            <button
                onClick={ () => Game.instance.resetSceneStack(MainMenuScene) }
            >Quit</button>
        </div>;
    }
}
