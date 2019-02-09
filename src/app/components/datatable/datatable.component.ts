import { Component, OnInit, Input } from '@angular/core';
import { movies } from '../../models/movie.interface';

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html'
})

export class DataTableComponent implements OnInit {
    @Input() movieList: movies[];
    @Input() pSize: number;
    tableHeaders: Array<any>;
    headerModel = {};

    currentList: movies[];

    p: number = 1;

    constructor() {
        this.tableHeaders = [
            { key: "movie_title", value: "Title", search: true },
            { key: "director_name", value: "Director", search: true },
            { key: "actor_1_name", value: "Actors" },
            { key: "genres", value: "Genres" , search: true},
            { key: "language", value: "Language" },
            { key: "country", value: "Country" },
            { key: "content_rating", value: "Content Rating" },
            { key: "budget", value: "Budget" },
            { key: "title_year", value: "Year" },
            { key: "plot_keywords", value: "Keywords" }
        ];
        this.headerModel = {
            movie_title: "",
            director_name: ""
        }
    }

    ngOnInit() {
        this.currentList = this.movieList;
    }

    doSearch() {

        for (let i of Object.keys(this.headerModel)) {

        }
        let self = this;
        this.movieList = this.currentList.filter((item) => {
            let tempStatus = true;
            let headerKeys = Object.keys(self.headerModel);
            for (let i of headerKeys) {
                debugger;
                let isExists = (<any>item)[i].indexOf((<any>self.headerModel)[i]) > -1;
                if (!isExists){
                    tempStatus = false; 
                    break;
                }
            }

            return tempStatus;
        })
    }
}