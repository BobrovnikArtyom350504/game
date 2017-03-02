import $ from 'jquery';

import { View, Model } from 'core/components';



export default class ResourceView extends View {
    constructor(entity, selector) {
        super(entity, selector);
        this.model = this.entity.findComponentOf(Model);
    }

    render() {
        $(this.selector).find('[data-resource-value]').html(this.model.value);
        $(this.selector).find('[data-resource-max]').html(this.model.max);
        if(this.model.blocked) {
            $(this.selector).find('[data-resource-value]').css('color', 'gray');
            $(this.selector).find('[data-resource-max]').css('color', 'gray');
        }
        else {
            $(this.selector).find('[data-resource-value]').css('color', 'black');
            $(this.selector).find('[data-resource-max]').css('color', 'black');
        }
    }
}
