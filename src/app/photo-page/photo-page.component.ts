import { Component, OnInit } from '@angular/core';
import { GetPhotoService } from '../get-photo.service';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {
  photoUrl: string;
  constructor(private photoService: GetPhotoService) {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl=response.urls.regular;
    });
  };

  onClick() {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl=response.urls.regular;
    });
  };

  ngOnInit(){};
}
