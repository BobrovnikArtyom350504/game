'use strict';

import React from 'react';

import Game from 'core/game.js';

import DayScene from 'game/scenes/day.js';

export default class MainMenuView extends React.Component {
    render() {
        return <div>
            <h1>Main menu</h1>
            <button
                onClick={ () => Game.instance.changeScene(DayScene) }
            >Play</button>
        </div>;
    }
}
