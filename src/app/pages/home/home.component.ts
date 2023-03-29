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
        text: 'Projeto pessoal de controle financeiro criado com Angular.',
        projectClass: 'my-balance',
        hostedUrl: 'https://my-balance-clouds83.vercel.app/reports',
        githubUrl: 'https://github.com/clouds83/my-balance2',
        imgUrl: 'assets/img/my-balance-home_552.png',
      },
      {
        title: 'CLIPZ',
        text: 'Plataforma de vídeos curtos criado com Angular. Projeto de curso.',
        projectClass: 'clipz',
        hostedUrl: 'https://game-clips-clouds83.vercel.app/',
        githubUrl: 'https://github.com/clouds83/game-clips',
        imgUrl: 'assets/img/clipz-home_552.png',
      },
      {
        title: 'MovieDB',
        text: 'Projeto de estudo de integração de API criado com Angular.',
        projectClass: 'movie-db',
        hostedUrl: 'https://movie-db-clouds83.vercel.app/',
        githubUrl: 'https://github.com/clouds83/movie-db',
        imgUrl: 'assets/img/moviedb-home_552.png',
      },
    ];
  }
}
