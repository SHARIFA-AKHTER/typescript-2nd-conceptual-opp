"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
//practice opp
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getDetails() {
        return `Product: ${this.name} - ${this.price} stock: ${this.quantity}`;
    }
    getStockValue() {
        return this.price * this.quantity;
    }
}
exports.Product = Product;
