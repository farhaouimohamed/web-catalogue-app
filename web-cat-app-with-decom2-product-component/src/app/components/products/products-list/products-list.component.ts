import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../model/product.model';
import {Observable} from 'rxjs';
import {AppDataState, DataStateEnum, ProductActionsTypes, ActionEvent} from '../../../state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products$:Observable<AppDataState<Product[]>> |null=null;

  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }


}
