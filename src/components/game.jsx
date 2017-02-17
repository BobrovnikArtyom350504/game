import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
    score: state.score,
    subscore: state.subscore.score
}))
export default class Game extends Component {
    render() {
        return (
            <div></div>
        );
    }
}
