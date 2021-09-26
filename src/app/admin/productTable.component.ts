import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    templateUrl: "./productTable.component.html"
})
export class ProductTableComponent{
    constructor(private reprository : ProductRepository){

    }

    getProducts() : Product[]{
        return this.reprository.getProducts();
    }

    deleteProduct(id : number){
        this.reprository.deleteProduct(id);
    }
}