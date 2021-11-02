import { Action } from '@ngrx/store';
import { GetAllProductsSuccess, GetAllProductsError, ProductActionTypes, GetSelectedProductsSuccess, GetSelectedProductsError, ProductsActions, SearchProductsSuccess, SearchProductsError, SelectProduct, SelectProductSuccess, SelectProductError, DeleteProductSuccess, DeleteProductError, NewProductSuccess, SaveProductSuccess, SaveProductError, EditProductSuccess, EditProductError, UpdateProductSuccess, UpdateProductError } from './products.actions';
import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../services/products.service";
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProductsEffects{
  constructor(private productsService: ProductsService, private effectActions:Actions){

  }
  getAllProductsSuccessEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.GET_ALL_PRODUCTS),
      mergeMap((action)=>{
        return this.productsService.getAllProducts()
          .pipe(
            map((products)=>new GetAllProductsSuccess(products)),
            catchError((err)=>of(new GetAllProductsError(err.message)))
          )
      })
    )
  );
  getSelectedProductsSuccessEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action)=>{
        return this.productsService.getSelectedProducts()
          .pipe(
            map((products)=>new GetSelectedProductsSuccess(products)),
            catchError((err)=>of(new GetSelectedProductsError(err.message)))
          )
      })
    )
  );
  SearchProductsSuccessEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.SEARCH_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.searchProducts(action.payload)
          .pipe(
            map((products)=>new SearchProductsSuccess(products)),
            catchError((err)=>of(new SearchProductsError(err.message)))
          )
      })
    )
  );
  SelectProductSuccessEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.SELECT_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.select(action.payload)
          .pipe(
            map((product)=>new SelectProductSuccess(product)),
            catchError((err)=>of(new SelectProductError(err.message)))
          )
      })
    )
  );
  DeleteProductSuccessEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.DELETE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.deleteProduct(action.payload.id)
          .pipe(
            map(()=>new DeleteProductSuccess(action.payload)),
            catchError((err)=>of(new DeleteProductError(err.message)))
          )
      })
    )
  );
  NewProductSuccessEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.NEW_PRODUCT),
      map((action:ProductsActions)=>{
        return new NewProductSuccess({});
      })
    )
  );

  SaveProductSuccessEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.SAVE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.saveProduct(action.payload)
          .pipe(
            map((product)=>new SaveProductSuccess(product)),
            catchError((err)=>of(new SaveProductError(err.message)))
          )
      })
    )
  );

  EditProductSuccessEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.EDIT_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productsService.getProduct(action.payload)
          .pipe(
            map((product)=>new EditProductSuccess(product)),
            catchError((err)=>of(new EditProductError(err.message)))
          )
      })
    )
  );
  updateProductSuccessEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductActionTypes.UPDATE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        console.log("action");
        return this.productsService.editProduct(action.payload)
          .pipe(
            map((product)=>new UpdateProductSuccess(product)),
            catchError((err)=>of(new UpdateProductError(err.message)))
          )
      })
    )
  );
}
