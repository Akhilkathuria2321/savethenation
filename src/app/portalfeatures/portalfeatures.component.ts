import { Component, OnInit } from '@angular/core';
import { SlideComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-portalfeatures',
  templateUrl: './portalfeatures.component.html',
  styleUrls: ['./portalfeatures.component.scss']
})
export class PortalfeaturesComponent implements OnInit {

  slideIndex = 2;
  constructor() { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i: number;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
     // slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
     // dots[i].className = dots[i].className.replace(" active", "");
    }
   // slides[this.slideIndex - 1].style.display = "block";
     dots[this.slideIndex - 1].className += ' active';
  }
}
