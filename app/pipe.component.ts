import { Component } from 'angular2/core';


@Component({
    selector: 'PipeExamples',
    templateUrl: './pipe.component.html',
})
export class PipeComponent{
    birthday = new Date(1988, 2, 15); 
}

