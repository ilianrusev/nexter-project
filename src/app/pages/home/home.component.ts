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

  features: any[] = [
    {
      icon: 'assets/img/sprite.svg#icon-global',
      heading: "World's best luxury homes.",
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    },
    {
      icon: 'assets/img/sprite.svg#icon-trophy',
      heading: 'Only the best properties.',
      text: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
    },
    {
      icon: 'assets/img/sprite.svg#icon-map-pin',
      heading: 'All homes in top locations.',
      text: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.',
    },
    {
      icon: 'assets/img/sprite.svg#icon-key',
      heading: 'New home in one week.',
      text: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      icon: 'assets/img/sprite.svg#icon-presentation',
      heading: 'Top 1% realtors.',
      text: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    },
    {
      icon: 'assets/img/sprite.svg#icon-lock',
      heading: 'Secure payments on Nexter.',
      text: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
