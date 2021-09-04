import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Product } from "../model/product.model";

@Component({
    templateUrl : "./cartDetail.component.html"
})  
export class CartDetailComponent{
    constructor(public cart : Cart){

    }

    updateQuantity(product: Product, e : any){
        let qty = e.target?.value;
        qty = qty ? Number(qty) : 0;
        this.cart.updateQuantity(product, qty);
    }
}