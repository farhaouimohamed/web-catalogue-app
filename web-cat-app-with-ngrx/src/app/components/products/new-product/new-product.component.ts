import { NewProduct, SaveProduct } from './../../../ngrx/products.actions';
import { Store } from '@ngrx/store';
import { ProductsStateEnum } from './../../../ngrx/products.reducer';
import { ProductsState } from 'src/app/ngrx/products.reducer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productFormGroup:FormGroup|null=null;
  state:ProductsState|null=null;
  readonly ProductsStateEnum=ProductsStateEnum;
  submitted:boolean=false;

  constructor(private store:Store<any>, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProduct({}));
    this.store.subscribe(state=>{
      this.state=state.productsState;
      if(this.state?.dataState==ProductsStateEnum.NEW){
        this.productFormGroup=this.fb.group({
          name:["", Validators.required],
          price:[0, Validators.required],
          quantity:[0, Validators.required],
          selected:[true, Validators.required],
        });
      }
    });
  }

  newProduct(){
    this.store.dispatch(new NewProduct({}));
  }
  onSaveProduct(){
    this.submitted=true;
    if(!this.productFormGroup?.valid) return
    this.store.dispatch(new SaveProduct(this.productFormGroup?.value));
  }

}
