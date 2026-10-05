import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent {
  constructor() {}
  slides = [
    { image: 'assets/d2.jpeg' },
    { image: 'assets/d3.jpeg' }
  ];
  
  

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? (this.slides.length - 1) : (this.currentIndex - 1);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : (this.currentIndex + 1);
  }

  currentSlide(index: number) {
    this.currentIndex = index;
  }
}
