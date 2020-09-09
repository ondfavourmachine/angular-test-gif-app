import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";
import { Giphy } from "../giphy";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: "app-search-field",
    // selector: 'app-root',
    templateUrl: "./search-field.component.html",
    styleUrls: ["./search-field.component.css"]
})
export class SearchFieldComponent implements OnInit {
    name = "Search Field";
    searchString: string = "";
    gifyResults: Giphy[] = [];
    noGiphy: string = undefined;
    constructor(private searchservice: SearchService, private router: Router) {}

    ngOnInit() {}

    searchForGiphy(event: Event, totalNumber?: number) {
        if (this.searchString.length < 1) return;
        const button = event.target as HTMLButtonElement;
        let prevTextContent = button.textContent;
        button.textContent = "Searching...";
        this.noGiphy = undefined;
        this.gifyResults = [];
        this.searchservice
            .fetchString(
                this.searchString,
                totalNumber ? totalNumber : undefined
            )
            .subscribe(
                val => {
                    const { data } = val;
                    button.textContent = prevTextContent;
                    this.gifyResults = [...data];
                    if (this.gifyResults.length < 1) {
                        this.noGiphy = `We couldn't find any results for ${this.searchString}`;
                    }
                },
                (err: HttpErrorResponse) => {
                    this.noGiphy = err.error.message;
                }
            );
    }

    sendData(gif: Giphy) {
        this.searchservice.individualGif = gif;
        this.router.navigate(["/results"]);
    }

    // multipleGifs($event, numberPerPage) {}
}
