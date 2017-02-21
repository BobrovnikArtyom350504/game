import { Component } from 'core';
import { Model, View, ActionCreator } from 'core/components';



export default class Controller extends Component {
    constructor (entity, model, view, actionCreator) {
        super(entity);
        this.model = model || entity.findComponentOf(Model);
        this.view = view || entity.findComponentOf(View);
        this.actionCreator = actionCreator || entity.findComponentOf(ActionCreator);
    }
}
