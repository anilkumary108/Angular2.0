import {Component} from 'angular2/core';
import { CourseComponent } from './courses.component';
import { AuthorComponent } from './authors.component';



@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App Updated - 1 </h1>
                <courses></courses>
                <author></author>
                <PipeExamples></PipeExamples>
                `,
    directives:[CourseComponent,AuthorComponent]
})
export class AppComponent { }