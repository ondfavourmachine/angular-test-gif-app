import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";

import { SearchFieldComponent } from "./search-field.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { SearchService } from "../search.service";
import { RouterTestingModule } from "@angular/router/testing";
// import { By }

describe("SearchFieldComponent", () => {
    let component: SearchFieldComponent;
    let fixture: ComponentFixture<SearchFieldComponent>;
    let debugelement: DebugElement;
    let httpClient: HttpClient;
    let httpMock: HttpTestingController;
    let service: SearchService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchFieldComponent],
            imports: [
                FormsModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [SearchService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchFieldComponent);
        component = fixture.componentInstance;
        debugelement = fixture.debugElement;
        httpClient = TestBed.get(HttpClient);
        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(SearchService);
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have an input field", () => {
        let input = debugelement.query(By.css("input"));
        expect(input.nativeElement).toBeTruthy();
        // expect(component).toBeTruthy();
    });

    it("should have an input field value to be the same as component searchString", async () => {
        component.searchString = "smiling";
        let input = debugelement.query(By.css("input"));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(input.nativeElement.value).toContain(component.searchString);
        });

        // expect(component).toBeTruthy();
    });

    it("results list should be empty if input value is empty", () => {
        let input = debugelement.query(By.css("input"));
        input.nativeElement.value = "";
        fixture.detectChanges();
        let value = input.nativeElement.value;
        expect(component.gifyResults.length).toBeLessThan(1);
    });
});
