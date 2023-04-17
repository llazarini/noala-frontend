import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Image} from "../../interfaces/image";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

    constructor(private httpClient: HttpClient) { }

    /**
     * Getter and Setter for the favorites in the localStorage
     */
    get favorites(): Array<string> {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
        return favorites as Array<string>;
    }

    set favorites(images: Array<string>) {

        console.log(images)
        localStorage.setItem('favorites', JSON.stringify(images));
    }

    /**
     * Favorite or un-favorite an image
     * @param image
     */
    favorite(image: Image) {
        if (this.favorites.indexOf(image.id) >= 0) {
            let favorites = this.favorites;
            favorites.splice(this.favorites.indexOf(image.id), 1)
            this.favorites = favorites;
            return;
        }
        let favorites = this.favorites;
        favorites.push(image.id);
        this.favorites = favorites;
    }

    /**
     * Get random dog images
     */
    randomImages(): Observable<Image[]> {
        return this.httpClient.get<Image[]>(`${environment.api}/images/random`)
    }
}
