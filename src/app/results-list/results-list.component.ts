import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";

@Component({
    selector: "app-results-list",
    templateUrl: "./results-list.component.html",
    styleUrls: ["./results-list.component.css"]
})
export class ResultsListComponent implements OnInit {
    constructor(public searchservice: SearchService) {}

    ngOnInit() {
        this.searchservice.individualGif;
    }
}
