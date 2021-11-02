import { ProductActionsTypes } from './../../state/product.state';
import { EventDriverService } from './../../state/event.driver.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:number;
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  constructor(private activatedRoute : ActivatedRoute, private productsService:ProductsService, private fb:FormBuilder, private eventDriverService: EventDriverService) {
    this.productId = activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId)
      .subscribe(product=>{
         this.productFormGroup=this.fb.group({
          id:[product.id,Validators.required],
          name:[product.name,Validators.required],
          price:[product.price,Validators.required],
          quantity:[product.quantity,Validators.required],
          selected:[product.selected,Validators.required],
          available:[product.available,Validators.required]
         })
      });
  }

  onEditProduct(){
      this.productsService.editProduct(this.productFormGroup?.value).subscribe(data=>{
        alert("Success Product updated");
        this.eventDriverService.publishEvent({type: ProductActionsTypes.PRODUCT_UPDATED});
      })
  }

}