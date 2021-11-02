import { Router } from '@angular/router';
import { DeleteProduct, SelectProduct } from './../../../../ngrx/products.actions';
import { Product } from './../../../../model/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Input() product:Product|null=null;
  constructor(private store:Store, private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(product:Product){
    this.store.dispatch(new SelectProduct(product));
  }
  onDelete(product:Product){
    this.store.dispatch(new DeleteProduct(product));
  }
  onEdit(product:Product){
    this.router.navigateByUrl("/editProduct/"+product.id);
  }

}
