import { Customer } from './customer';
import { Component } from 'angular2/core';
import { FormsModule }   from 'angular2/forms';

declare var __moduleName: string;
@Component({
    selector: 'customer-form',
    templateUrl:'app/customer-form-validation/customer-form.component.html'
    //template: require('./app.html')

})
export class CustomerFormComponent{
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new Customer(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}