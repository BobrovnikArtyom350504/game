import { Component } from 'core';



export default class LoggerComponent extends Component {
    constructor(components = {}) {
        super(components);
        console.log('constructed');
    }

    create() {
        console.log('created');
    }
}
