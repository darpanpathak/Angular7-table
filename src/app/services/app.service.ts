import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { movies } from '../models/movie.interface';

@Injectable({
    providedIn: 'root'
  })
export class AppService {

    constructor(private http : HttpClient) { }

    getMovies(){
        return this.http.get<movies[]>(environment.allmoviesurl);
    }
}