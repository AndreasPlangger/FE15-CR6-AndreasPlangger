import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  products: Array<{ name: string, img: any, description: string, price: number, availability: boolean, }> = [

    {
      name: 'Pizza La Spanda',
      img: '../../assets/img/pizza_la_spanda.jpg',
      description: 'fg',
      price: 22,
      availability: true,

    },
    {
      name: 'Pizza Picante',
      img: '../../assets/img/pizza_picante.jpg',
      description: '',
      price: 22,
      availability: true,
    },
    {
      name: 'Pizza Vegetariana',
      img: '../../assets/img/pizza_vegetariana_alt.jpg',
      description: '',
      price: 22,
      availability: true,
    },
    {
      name: 'Pizza Margherita',
      img: '../../assets/img/pizza_margherit.jpg',
      description: '',
      price: 22,
      availability: true,
    },
    {
      name: 'Spaghetti di Mare',
      img: '../../assets/img/spaghetti_di_mare.jpg',
      description: '',
      price: 22,
      availability: true,

    },
    {
      name: 'Lasagna',
      img: '../../assets/img/lasagn.jpg',
      description: '',
      price: 22,
      availability: true,
    },
    {
      name: 'Insalata Mista',
      img: '../../assets/img/insalata_mista.jpg',
      description: '',
      price: 22,
      availability: true,
    },
    {
      name: 'Dulce de Leche',
      img: '../../assets/img/dulce_de_leche.jpg',
      description: '',
      price: 22,
      availability: true,
    },
    {
      name: 'Panna Cotta',
      img: '../../assets/img/panna_cotta.jpg',
      description: '',
      price: 22,
      availability: false,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
