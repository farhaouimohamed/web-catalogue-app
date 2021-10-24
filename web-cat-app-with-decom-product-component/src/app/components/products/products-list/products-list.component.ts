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
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(product: Product){
    this.productEventEmitter.emit({
      type: ProductActionsTypes.SELECT_PRODUCT, payload: product
    });
  }
  ondeleteProduct(product: Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: product})
  }
  onEditProduct(product: Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCT, payload: product})
  }

  onActionEvent($event: ActionEvent){
    this.productEventEmitter.emit($event);
  }

}
