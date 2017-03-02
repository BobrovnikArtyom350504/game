import { Controller } from 'core/components';



export default class ResourceController extends Controller {
    constructor(entity) {
        super(entity);
    }

    inc() {
        this.model.inc();
        this.view.render();
    }

    setMax(max) {
        this.model.max = max;
        this.view.render();
    }

    setIncrease(increase) {
        this.model.increase = increase;
        this.view.render();
    }

    unBlock() {
        this.model.blocked = false;
        this.view.render();
    }
}
