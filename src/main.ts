// import { Product } from "./models/product";

// import { DigitalProduct } from "./models/DigitalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { Product } from "./models/product";


// const sampleProduct = new Product(1, 'Demo Product',20,50);
// console.log(sampleProduct.getDetails());


// const sampleProduct = new DigitalProduct(1, 'Demo Product',20,50,100);
// console.log(sampleProduct.getDetails())
// console.log(sampleProduct.getStockValue())
// console.log(sampleProduct.getDownloadInfo())

const sampleProduct1 = new PhysicalProduct(1, 'Demo Product',20,50)
const sampleProduct = new Product(1, 'Demo Product',20,50)
// console.log(sampleProduct.sell(250));
// console.log(sampleProduct.getDetails())
// console.log(sampleProduct.getStockValue())
// console.log(sampleProduct1.getStockValue())