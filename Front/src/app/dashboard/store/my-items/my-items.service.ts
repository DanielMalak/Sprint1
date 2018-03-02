import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MyItemsService {

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

createProduct(data){
    console.log(data);
return this.http.post(environment.apiUrl + 'userproducts/createProduct',data);
}

updateProduct(){
return this.http.get(environment.apiUrl + 'userproducts/updateProduct/:productId');
}

deleteProduct(){
return this.http.get(environment.apiUrl + 'userproducts/deleteProduct/:productId');
}
}