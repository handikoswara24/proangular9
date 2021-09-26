import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
    templateUrl : "./orderTable.component.html"
})
export class OrderTableComponent{
    includeShipped: boolean = false;

    constructor(private reprository: OrderRepository){

    }

    getOrders() : Order[]{
        return this.reprository.getOrders()
            .filter(o => this.includeShipped || !o.shipped);
    }

    markShipped(order : Order){
        order.shipped = true;
        this.reprository.updateOrder(order);
    }

    delete(id: number){
        this.reprository.deleteOrder(id);
    }
}