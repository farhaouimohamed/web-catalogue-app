import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';


@Injectable({providedIn:"root"})
export class ProductsService {
  constructor(private http:HttpClient){
  }

  getAllProducts():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products");
  }
  getSelectedProducts():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }
  getAvailableProducts():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");
  }
  searchProducts(keyword:string):Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }
  select(product:Product):Observable<Product>{
    return this.http.put<Product>(environment.host+"/products/"+product.id,{...product,selected:!product.selected});
    }
  public deleteProduct(id:number):Observable<void>{
    return this.http.delete<void>(environment.host+"/products/"+id);
  }
  saveProduct(product:Product):Observable<Product>{
    let host = environment.host;
    return this.http.post<Product>(host+"/products",product);
  }
  getProduct(id:number):Observable<Product>{
      let host = environment.host;
      return this.http.get<Product>(host+"/products/"+id);
    }
  editProduct(product: Product):Observable<Product>{
    let host = environment.host;
    return this.http.put<Product>(host+"/products/"+product.id, product);
  }
}
