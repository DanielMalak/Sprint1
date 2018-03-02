import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class StoreService {

constructor(private http: HttpClient) { }

getProducts() {
return this.http.get(environment.apiUrl + 'userproducts/getProducts');
}

getProductById(){
return this.http.get(environment.apiUrl + 'userproducts/getProduct/:productId');
}

getProductBelowPrice(){
return this.http.get(environment.apiUrl + 'userproducts/getProductsBelowPrice/:price');
}

createProduct(){
return this.http.get(environment.apiUrl + 'userproducts/createProduct');
}

updateProduct(){
return this.http.get(environment.apiUrl + 'userproducts/updateProduct/:productId');
}

deleteProduct(){
return this.http.get(environment.apiUrl + 'userproducts/deleteProduct/:productId');
}
}