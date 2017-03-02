import { Component } from 'core';



export default class View extends Component {
    constructor(entity, selector) {
        super(entity);
        this.selector = selector;
    }
}
