import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../../model/product.model';
import {AppDataState, DataStateEnum, ProductActionsTypes, ActionEvent} from '../../../state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product?:Product;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(product: Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product});
  }

  ondeleteProduct(product: Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: product});
  }

  onEditProduct(product: Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCT, payload: product});
  }

}
