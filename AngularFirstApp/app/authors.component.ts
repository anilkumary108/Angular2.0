import { AuthorService } from './author.service';
import { Component } from 'angular2/core';

@Component({
        selector:'author',
        template:`
            <h2>Authors</h2>
            {{title}}

            <ul>
                <li *ngFor="#author of authors">
                    {{author}}
                </li>
            </ul>
        `,providers:[AuthorService]
})
export class AuthorComponent{
        title: string = "Author Title"
        authors;

        constructor(authorService: AuthorService){
            this.authors = authorService.getAuthors();
        }
}