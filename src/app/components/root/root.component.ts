import { AppService } from '../../services/app.service';
import { Component, AfterContentInit, AfterViewInit, ViewChild, OnInit } from "@angular/core";
import { movies } from '../../models/movie.interface';

@Component({
    selector: 'root',
    templateUrl: "./root.component.html",
    styleUrls:["./root.component.css"]
})
export class RootComponent implements OnInit {

    public movieList: Array<movies>;
    pageSize : number;
    theme : string;

    constructor(private appService: AppService) {
        this.pageSize=10;
        this.theme = "light";
    }

    ngOnInit(): void {
        this.appService.getMovies().subscribe((result: movies[]) => {
            this.movieList = result;
        });
    }
}