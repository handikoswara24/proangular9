import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "store",
    templateUrl : "./store.component.html"
})
export class StoreComponent{
    selectedCategory : any = null;
    productsPerPage : number = 4;
    selectedPage : number = 1;

    constructor(private repository: ProductRepository, private cart : Cart, private router : Router){

    }

    get products() : Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories() : string[]{
        return this.repository.getCategories();
    }

    changeCategory(newCategory? : string){
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number){
        this.selectedPage = newPage;
    }

    changePageSize(e : any){
        var newSize = e.target.value;
        this.productsPerPage = parseInt(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository
        .getProducts(this.selectedCategory).length / this.productsPerPage)
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository
        .getProducts(this.selectedCategory).length / this.productsPerPage))
        .fill(0).map((x, i) => i + 1);
    }

    addProductToCart(product : Product){
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
}