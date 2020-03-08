import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public list: Array<any>;
  public matGrid: Array<any>;
  public titleImgCabecera: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.listNav();
    this.infoCenter();
    this.titleImg();
  }

  private listNav() {
    this.list = [
      {
        name: 'Categorias'
      },
      {
        name: 'Novedades'
      },
      {
        name: 'Ofertas'
      },
      {
        name: 'Hombre'
      },
      {
        name: 'Mujeres'
      },
    ]
  }

  private infoCenter() {
    this.matGrid = [
      {
        cols: 6,
        rows: 2,
        title: true
      },
      {
        cols: 6,
        rows: 4,
        img: true
      },
      {
        cols: 6,
        rows: 1,
        description: true
      },
      {
        cols: 6,
        rows: 1,
        boton: true
      }
    ]
  }

  private titleImg() {
    this.titleImgCabecera = [
      {
        title: 'Messi 97'
      },
      {
        title: 'CR7 201'
      },
      {
        title: 'LeBron Ax'
      },
      {
        title: 'Curry25'
      },
    ]
  }

}
