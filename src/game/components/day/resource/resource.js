import { Model } from 'core/components';



export default class Resource extends Model {
    constructor(entity, name) {
        super(entity, 'resources', name, {
            value: 0,
            max: 100,
            increase: 1,
            blocked: true
        });
    }

    inc() {
        let expectedValue = this.value += this.increase;
        this.value = expectedValue < this.max ? expectedValue : this.max;
    }
}
