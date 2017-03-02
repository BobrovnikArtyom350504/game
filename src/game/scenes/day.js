import $ from 'jquery';

import { Scene, Component, Entity, view } from 'core';
import { EntityGroup } from 'core/components';

import { MainMenuScene } from 'game/scenes';
import ResourceController from 'game/components/day/resource/resource-controller';
import ResourceView from 'game/components/day/resource/view';
import Resource from 'game/components/day/resource/resource';



@view($(require('game/views/day.html')))
class DayScene extends Scene {
    create() {
        let resources = ['wood', 'stone', 'iron'];
        let resourcesourcesEnteties = [];
        for (let res of resources) {
            let entity = new Entity();
            entity.addComponent(new Resource(entity, res));
            entity.addComponent(new ResourceView(entity, `[data-resource=${res}]`));
            entity.addComponent(new ResourceController(entity));
            resourcesourcesEnteties.push(entity);
        }

        let day = new Entity();
        // debugger;
        day.addComponent(new EntityGroup(day, ...resourcesourcesEnteties));
        this.entities.push(day);

        super.create();
    }

    start() {
        this.entities[0].components['EntityGroup'].entities[0].components['ResourceView'].render();
        this.entities[0].components['EntityGroup'].entities[1].components['ResourceView'].render();
        this.entities[0].components['EntityGroup'].entities[2].components['ResourceView'].render();
    }
}

export default DayScene
