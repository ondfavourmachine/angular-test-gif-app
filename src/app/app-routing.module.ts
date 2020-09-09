import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultsListComponent } from "./results-list/results-list.component";
import { SearchFieldComponent } from "./search-field/search-field.component";

const routes: Routes = [
    {
        path: "results",
        component: ResultsListComponent
    },

    {
        path: "",
        component: SearchFieldComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
