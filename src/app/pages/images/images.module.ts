import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images.component';
import { ImagesRoutingModule } from "./images-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        ImagesComponent
    ],
    imports: [
        CommonModule,
        ImagesRoutingModule,
        MatButtonModule
    ]
})
export class ImagesModule { }
