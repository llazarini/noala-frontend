import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";

const routes: Routes = [
    {
        pathMatch: "full",
        path: "",
        redirectTo: "images",
    },
    {
        path: "images",
        loadChildren: () =>
            import("./pages/images/images.module").then(
                (m) => m.ImagesModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
