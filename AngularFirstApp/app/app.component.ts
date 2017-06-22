import {Component} from 'angular2/core';
import { CourseComponent } from './courses.component';
import { AuthorComponent } from './authors.component';
import {CustomerFormComponent} from './customer-form-validation/customer-form-component';


@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App Updated - 1 </h1>
                <courses></courses>
                <author></author>
                <PipeExamples></PipeExamples>
                <customer-form></customer-form>
                `,
    directives: [CourseComponent, AuthorComponent]
})
export class AppComponent { }