import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../services/image/image.service";
import {Image} from "../../interfaces/image";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
    public images: Array<Image> = []
    private loading: number = 0;

    constructor(
        private imageService: ImageService
    ) {}

    ngOnInit() {
        this.randomImages();
    }

    /**
     * Get random dog images from the API
     */
    public randomImages() {
        this.loading += 1;
        this.imageService
            .randomImages()
            .subscribe(response => {
                this.images = response;
            })
            .add(() => this.loading -= 1)
    }

    public favorite(image: Image) {
        this.imageService.favorite(image);
    }

    public isFavorite(image: Image) {
        return this.imageService.favorites.indexOf(image.id) >= 0
    }
}
