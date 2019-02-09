import { VbarSplitterPipe } from './pipes/vbarsplitter.pipe';
import { AppService } from './services/app.service';
import { DataTableComponent } from './components/datatable/datatable.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./components/root/root.component";
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    imports: [BrowserModule, HttpClientModule, NgxPaginationModule, FormsModule],
    declarations: [RootComponent, DataTableComponent, VbarSplitterPipe],
    bootstrap: [RootComponent]
})
export class RootModule { }