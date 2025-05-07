import { Product } from "./product";
import { Purchasable } from './../interfaces/PolymorphismInterface';

export class PhysicalProduct extends Product implements Purchasable {
    getStockValue(): number {
        {
            return this.price;
        }
    }
}