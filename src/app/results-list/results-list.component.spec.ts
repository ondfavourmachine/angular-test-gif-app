import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResultsListComponent } from "./results-list.component";
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";

describe("ResultsListComponent", () => {
    let component: ResultsListComponent;
    let fixture: ComponentFixture<ResultsListComponent>;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultsListComponent],
            providers: [HttpClientTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultsListComponent);
        component = fixture.componentInstance;
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        fixture.detectChanges();
    });

    // it("should create", () => {
    //     expect(component).toBeTruthy();
    // });
});
