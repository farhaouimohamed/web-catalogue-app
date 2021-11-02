import { ProductsState } from 'src/app/ngrx/products.reducer';
import { GetAllProducts, GetSelectedProducts, SearchProducts, ProductsActions, ProductActionTypes } from './../../../ngrx/products.actions';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  state?:ProductsState;
  readonly ProductsActionsTypes=ProductActionTypes;
  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.state=state.productsState;
    });
  }

  onGetAllProducts(){
    this.store.dispatch(new GetAllProducts({}));
  }
  onGetSelectedProducts(){
    this.store.dispatch(new GetSelectedProducts({}));
  }
  onGetAvailableProducts(){
  }
  onSearch(dataForm:any){
    this.store.dispatch(new SearchProducts(dataForm.keyword));
  }
  onSaveProduct(){
    this.router.navigateByUrl("/newProduct");
  }

}
