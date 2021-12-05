import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  slides = [
    'Лучшие преподаватели с наивысшей квалификацией',
    'Отличное и полезное занятие для вашего ребенка',
    'метро люблино работаем работаем а то заждались',
    'Приглашаем записаться на курсы представленные ниже',
];

  constructor() { }

  ngOnInit(): void {
  }

}
