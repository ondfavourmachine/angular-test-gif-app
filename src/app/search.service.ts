import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Giphy } from "./giphy";

@Injectable({
    providedIn: "root"
})
export class SearchService {
    api_key: string = "deokzgUjxm6QHQdp3H3aca1LSZcCpucc";
    test_Url: string =
        "https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=sphinx&limit=25&offset=0&rating=Y&lang=en";
    base_url: string = "https://api.giphy.com/v1/gifs/search";
    individualGif: Giphy = undefined;
    // ?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=sphinx&limit=25&offset=0&rating=Y&lang=en
    constructor(private http: HttpClient) {}

    fetchString(
        search: string,
        noOfPages?: number
    ): Observable<{ data: Giphy[]; meta: {}; pagination: {} }> {
        const params = {
            api_key: this.api_key,
            q: search,
            limit: noOfPages ? noOfPages.toString() : "25",
            offset: "500",
            rating: "Y",
            lang: "en"
        };
        // params.append("api_key", this.api_key);
        // params.append("q", search);
        // params.append("limit", noOfPages ? noOfPages.toString() : "25");
        // params.append("offset", "0");
        // params.append("rating", "Y");
        // params.append("lang", "en");
        return this.http.get<{ data: Giphy[]; meta: {}; pagination: {} }>(
            `${this.base_url}`,
            { params: params }
        );
    }
}
