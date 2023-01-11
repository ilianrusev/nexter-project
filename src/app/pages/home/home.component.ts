import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  houses: any[] = [
    {
      img: 'assets/img/house-1.jpeg',
      title: 'Beautiful Family House',
      location: 'USA',
      rooms: 5,
      price: '1,200,000',
      area: 325,
    },
    {
      img: 'assets/img/house-2.jpeg',
      title: 'Modern Glass Villa',
      location: 'Canada',
      rooms: 6,
      price: '2,750,000',
      area: 450,
    },
    {
      img: 'assets/img/house-3.jpeg',
      title: 'Crazy Country House',
      location: 'UK',
      rooms: 4,
      price: '850,000',
      area: 250,
    },
    {
      img: 'assets/img/house-4.jpeg',
      title: 'Large Rustical Villa',
      location: 'Portugal',
      rooms: 6,
      price: '2,200,000',
      area: 480,
    },
    {
      img: 'assets/img/house-5.jpeg',
      title: 'Majestic Palave House',
      location: 'Germany',
      rooms: 18,
      price: '9,500,000',
      area: 4230,
    },
    {
      img: 'assets/img/house-6.jpeg',
      title: 'Modern Family Apartment',
      location: 'Italy',
      rooms: 3,
      price: '600,000',
      area: 150,
    },
  ];

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
