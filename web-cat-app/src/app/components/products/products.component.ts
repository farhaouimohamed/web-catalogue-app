  import { Component, OnInit } from '@angular/core';
  import {ProductsService} from '../../services/products.service';
  import {Product} from '../../model/product.model';
  import {Observable, of} from 'rxjs';
  import {AppDataState, DataStateEnum} from '../../state/product.state';
  import {catchError, map, startWith} from 'rxjs/operators';
  import {Router} from '@angular/router';

  @Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
  })
  export class ProductsComponent implements OnInit {
    products$:Observable<AppDataState<Product[]>> |null=null;
    readonly DataStateEnum=DataStateEnum;
    /*products?:Product[];*/
    constructor(private productsService:ProductsService, private route:Router) { }

    ngOnInit(): void {
    }

    onGetAllProducts(){
      this.products$=this.productsService.getAllProducts().pipe(
        map(data=>({dataState: DataStateEnum.LOADED, data:data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      );
    }
    onGetSelectedProducts(){
    this.products$=this.productsService.getSelectedProducts().pipe(
          map(data=>({dataState: DataStateEnum.LOADED, data:data})),
          startWith({dataState: DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
        );
    }

    onGetAvailableProducts(){
    this.products$=this.productsService.getAvailableProducts().pipe(
          map(data=>({dataState: DataStateEnum.LOADED, data:data})),
          startWith({dataState: DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
        );
    }
    onSearch(dataForm:any){
    this.products$=this.productsService.searchProducts(dataForm.keyword).pipe(
            map(data=>({dataState: DataStateEnum.LOADED, data:data})),
            startWith({dataState: DataStateEnum.LOADING}),
            catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
          );
    }
    onSelectProduct(product: Product){
      this.productsService.select(product).subscribe(data=>{
              product.selected=data.selected;
            }, err=>{
              console.log(err);
            })
    }
    ondeleteProduct(product: Product){
      let v = confirm("Etes vous s??re ?");
      if(v == true)
      this.productsService.deleteProduct(product).subscribe(data=>{
             this.onGetAllProducts()
           }, err=>{
             console.log(err);
           })
    }
    onSaveProduct(){
      this.route.navigateByUrl("/newProduct");
    }
    onEditProduct(p: Product){
          this.route.navigateByUrl("/editProduct/"+p.id);
        }
  /*  onGetAllProducts(){
      this.productsService.getAllProducts().subscribe(data=>{
        this.products = data;
      }, err=>{
        console.log(err);
      })
    }*/
  }
