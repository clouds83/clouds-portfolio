import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  verticalViewPortHeight!: String;
  slides!: Object[];

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        title: 'My Balance',
        text: 'Web application for financial control created using the Angular framework.',
        background: 'mb-bg',
        hostedUrl: 'https://my-balance-clouds83.vercel.app/reports',
        githubUrl: 'https://github.com/clouds83/my-balance2',
        imgUrl: 'assets/img/my-balance-home_552.png',
      },
      {
        title: 'CLIPZ',
        text: 'Short video platform for the gaming niche.',
        background: 'blue',
        hostedUrl: 'https://game-clips-clouds83.vercel.app/',
        githubUrl: 'https://github.com/clouds83/game-clips',
        imgUrl: 'assets/img/clipz-home_552.png',
      },
      {
        title: 'MovieDB',
        text: 'Website that lists movies using a public API',
        background: 'red',
        hostedUrl: 'https://movie-db-clouds83.vercel.app/',
        githubUrl: 'https://github.com/clouds83/movie-db',
        imgUrl: 'assets/img/moviedb-home_552.png',
      },
    ];
  }
}
