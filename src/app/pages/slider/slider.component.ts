import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  constructor() { }
  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
      'assets/images/sponsors/bus.png','assets/images/sponsors/wikimedia.png',
      'assets/images/sponsors/one-world.png','assets/images/sponsors/wikiversity.png',
      'assets/images/sponsors/united-nations.png','assets/images/sponsors/sponsor-taous.jpg',
      'assets/images/sponsors/sponsor-unilever.jpg'       
     ];
  }

}

