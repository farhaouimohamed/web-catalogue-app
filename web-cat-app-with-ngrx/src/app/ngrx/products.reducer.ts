import { Action } from '@ngrx/store';
import { Product } from './../model/product.model';
import { ProductActionTypes, ProductsActions } from './products.actions';
export enum ProductsStateEnum{
  LOADING = "Loading",
  LOADED = "Loaded",
  ERROR = "Error",
  INITIAL = "Iniatial",
  NEW = "new",
  EDIT = "edit",
  UPDATED = "updated",
}

export interface ProductsState{
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum,
  currentProduct:Product|null,
  currentAction:ProductsActions|null
}

const initialState: ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL,
  currentProduct:null,
  currentAction:null
}

export function productsReducer(state:ProductsState=initialState, action:Action):ProductsState{
  switch(action.type){
    /**Get All Products */
    case ProductActionTypes.GET_ALL_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction:<ProductsActions>action};
    case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    /**Get Selected Products */
    case ProductActionTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action};
    case ProductActionTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    case ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    /**Search Products */
    case ProductActionTypes.SEARCH_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action};
    case ProductActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    case ProductActionTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    /**Select Product */
    case ProductActionTypes.SELECT_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action};
    case ProductActionTypes.SELECT_PRODUCT_SUCCESS:
      let product:Product=(<ProductsActions>action).payload;
      let products=state.products.map(p=>(p.id==product.id?product:p));
      return {...state, dataState:ProductsStateEnum.LOADED, products:products,currentAction:<ProductsActions>action};
    case ProductActionTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    /**Delete Product */
    case ProductActionTypes.DELETE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action};
    case ProductActionTypes.DELETE_PRODUCT_SUCCESS:
      let p:Product=(<ProductsActions>action).payload;
      let index=state.products.indexOf(p);
      let listProducts=[...state.products];
      listProducts.splice(index,1);
      return {...state, dataState:ProductsStateEnum.LOADED, products:listProducts,currentAction:<ProductsActions>action};
    case ProductActionTypes.DELETE_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
      /**New Product */
    case ProductActionTypes.NEW_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action};
    case ProductActionTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState:ProductsStateEnum.NEW,currentAction:<ProductsActions>action};
    case ProductActionTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
      /**Save Product */
    case ProductActionTypes.SAVE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action};
    case ProductActionTypes.SAVE_PRODUCT_SUCCESS:
      let prods:Product[]=[...state.products];
      prods.push((<ProductsActions>action).payload)
      return {...state, dataState:ProductsStateEnum.LOADED, products:prods,currentAction:<ProductsActions>action};
    case ProductActionTypes.SAVE_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
     /**Edit Product */
     case ProductActionTypes.EDIT_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action};
    case ProductActionTypes.EDIT_PRODUCT_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, currentProduct:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    case ProductActionTypes.EDIT_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    /**Update Product */
    case ProductActionTypes.UPDATE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING,currentAction:<ProductsActions>action};
    case ProductActionTypes.UPDATE_PRODUCT_SUCCESS:
      let updatedProduct:Product=(<ProductsActions>action).payload;
      let updatedProducts=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p);
      return {...state, dataState:ProductsStateEnum.UPDATED, products:updatedProducts,currentAction:<ProductsActions>action};
    case ProductActionTypes.UPDATE_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload,currentAction:<ProductsActions>action};
    default : return {...state}
  }
}
