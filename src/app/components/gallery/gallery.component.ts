import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  gallery: any[] = [
    { src: 'assets/img/gal-2.jpeg' },
    { src: 'assets/img/gal-1.jpeg' },
    { src: 'assets/img/gal-3.jpeg' },
    { src: 'assets/img/gal-4.jpeg' },
    { src: 'assets/img/gal-5.jpeg' },
    { src: 'assets/img/gal-6.jpeg' },
    { src: 'assets/img/gal-7.jpeg' },
    { src: 'assets/img/gal-8.jpeg' },
    { src: 'assets/img/gal-9.jpeg' },
    { src: 'assets/img/gal-10.jpeg' },
    { src: 'assets/img/gal-11.jpeg' },
    { src: 'assets/img/gal-12.jpeg' },
    { src: 'assets/img/gal-13.jpeg' },
    { src: 'assets/img/gal-14.jpeg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
