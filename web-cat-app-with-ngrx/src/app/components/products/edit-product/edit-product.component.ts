import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
import { EditProduct, UpdateProduct } from './../../../ngrx/products.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId:number;
  productFormGroup:FormGroup|null=null;
  state:ProductsState|null=null;
  readonly ProductsStateEnum=ProductsStateEnum;
  formBuilt:boolean=false;
  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute, private store:Store<any>, private fb:FormBuilder, private router:Router) {
    this.productId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProduct(this.productId));
    this.store.subscribe(state=>{
      this.state=state.productsState;
      if(this.state?.dataState==ProductsStateEnum.LOADED){
        if(this.state.currentProduct!=null){
          this.productFormGroup=this.fb.group({
            id:[this.state.currentProduct.id],
            name:[this.state.currentProduct.name, Validators.required],
            price:[this.state.currentProduct.price, Validators.required],
            quantity:[this.state.currentProduct.quantity, Validators.required],
            selected:[this.state.currentProduct.selected],
            available:[this.state.currentProduct.available],
          });
          this.formBuilt=true;
        }
      }
    });
  }

  okUpdate(){
    this.router.navigateByUrl("/products");
  }
  onUpdateProduct(){
    this.submitted=true;
    if(!this.productFormGroup?.valid) return;
    this.store.dispatch(new UpdateProduct(this.productFormGroup?.value));
  }

}
