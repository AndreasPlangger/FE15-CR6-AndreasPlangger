import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { products } from '../products';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: IProducts = {} as IProducts;
  id: number = 0;
  route: any;

  constructor() { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.product = products[this.id];
    });
  }

}
