import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductActionTypes{
  /**Get All Products */
  GET_ALL_PRODUCTS="[Products] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All Products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All Products Error",

  /**Get Selected Products */
  GET_SELECTED_PRODUCTS="[Products] Get Selected Products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected Products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected Products Error",

  /**Search Products */
  SEARCH_PRODUCTS="[Products] Search Products",
  SEARCH_PRODUCTS_SUCCESS="[Products] Search Products Success",
  SEARCH_PRODUCTS_ERROR="[Products] Search Products Error",

  /**Select Product */
  SELECT_PRODUCT="[Products] Select Product",
  SELECT_PRODUCT_SUCCESS="[Products] Select Product Success",
  SELECT_PRODUCT_ERROR="[Products] Select Product Error",

  /**Delete Product */
  DELETE_PRODUCT="[Products] Delete Product",
  DELETE_PRODUCT_SUCCESS="[Products] Delete Product Success",
  DELETE_PRODUCT_ERROR="[Products] Delete Product Error",

  /**New Product */
  NEW_PRODUCT="[Products] New Product",
  NEW_PRODUCT_SUCCESS="[Products] New Product Success",
  NEW_PRODUCT_ERROR="[Products] New Product Error",

   /**Save Product */
   SAVE_PRODUCT="[Products] Save Product",
   SAVE_PRODUCT_SUCCESS="[Products] Save Product Success",
   SAVE_PRODUCT_ERROR="[Products] Save Product Error",

   /**Edit Product */
   EDIT_PRODUCT="[Products] Edit Product",
   EDIT_PRODUCT_SUCCESS="[Products] Edit Product Success",
   EDIT_PRODUCT_ERROR="[Products] Edit Product Error",

   /**Update Product */
   UPDATE_PRODUCT="[Products] Update Product",
   UPDATE_PRODUCT_SUCCESS="[Products] Update Product Success",
   UPDATE_PRODUCT_ERROR="[Products] Update Product Error",
}

export class GetAllProducts implements Action{
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any){

  }
}
export class GetAllProductsSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}
export class GetAllProductsError implements Action{
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}
export class GetSelectedProducts implements Action{
  type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any){

  }
}
export class GetSelectedProductsSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}
export class GetSelectedProductsError implements Action{
  type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

export class SearchProducts implements Action{
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS;
  constructor(public payload:string){

  }
}
export class SearchProductsSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){

  }
}
export class SearchProductsError implements Action{
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string){

  }
}

export class SelectProduct implements Action{
  type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCT;
  constructor(public payload:Product){

  }
}
export class SelectProductSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload:Product){

  }
}
export class SelectProductError implements Action{
  type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload:string){

  }
}


export class DeleteProduct implements Action{
  type: ProductActionTypes = ProductActionTypes.DELETE_PRODUCT;
  constructor(public payload:Product){

  }
}
export class DeleteProductSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload:any){

  }
}
export class DeleteProductError implements Action{
  type: ProductActionTypes = ProductActionTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload:string){

  }
}

export class NewProduct implements Action{
  type: ProductActionTypes = ProductActionTypes.NEW_PRODUCT;
  constructor(public payload:any){

  }
}
export class NewProductSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload:any){

  }
}
export class NewProductError implements Action{
  type: ProductActionTypes = ProductActionTypes.NEW_PRODUCT_ERROR;
  constructor(public payload:string){

  }
}

export class SaveProduct implements Action{
  type: ProductActionTypes = ProductActionTypes.SAVE_PRODUCT;
  constructor(public payload:Product){

  }
}
export class SaveProductSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload:Product){

  }
}
export class SaveProductError implements Action{
  type: ProductActionTypes = ProductActionTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload:string){

  }
}
/**Edit product action */
export class EditProduct implements Action{
  type: ProductActionTypes = ProductActionTypes.EDIT_PRODUCT;
  constructor(public payload:number){

  }
}
export class EditProductSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload:Product){

  }
}
export class EditProductError implements Action{
  type: ProductActionTypes = ProductActionTypes.EDIT_PRODUCT_ERROR;
  constructor(public payload:string){

  }
}

/**Update product action */
export class UpdateProduct implements Action{
  type: ProductActionTypes = ProductActionTypes.UPDATE_PRODUCT;
  constructor(public payload:Product){

  }
}
export class UpdateProductSuccess implements Action{
  type: ProductActionTypes = ProductActionTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload:Product){

  }
}
export class UpdateProductError implements Action{
  type: ProductActionTypes = ProductActionTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload:string){

  }
}

export type ProductsActions =
  GetAllProducts | GetAllProductsSuccess | GetAllProductsError
  | GetSelectedProducts | GetSelectedProductsSuccess | GetSelectedProductsError
  | SearchProducts | SearchProductsSuccess | SearchProductsError
  | SelectProduct | SelectProductSuccess | SelectProductError
  | DeleteProduct | DeleteProductSuccess | DeleteProductError
  | NewProduct | NewProductSuccess | NewProductError
  | SaveProduct | SaveProductSuccess | SaveProductError
  | EditProduct | EditProductSuccess | EditProductError
  | UpdateProduct | UpdateProductSuccess | UpdateProductError
;
