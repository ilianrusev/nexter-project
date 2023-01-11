import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
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
