import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchFieldComponent } from "./search-field/search-field.component";
import { ResultsListComponent } from "./results-list/results-list.component";
import { SearchService } from "./search.service";

@NgModule({
    declarations: [AppComponent, SearchFieldComponent, ResultsListComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {}
