import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  title = 'app';
  @ViewChild('carousel') carousel: any;

  slides: Array<Object> = [
    {'src': './assets/img/zap_bol_1.png'},
    {'src': './assets/img/zap_bol_2.png'},
    {'src': './assets/img/zap_fut_1.png'},
    {'src': './assets/img/zap_fut_2.png'},
  ];

  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 360,
    height: 270,
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
 };

  constructor() { }

  ngOnInit(): void {
  }

  slideClicked (index) {
    this.carousel.slideClicked(index);
  }

}
