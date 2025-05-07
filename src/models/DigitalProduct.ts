import { Product } from "./product";

export class DigitalProduct extends Product{
      // downloadSizeMB: number;
    constructor(
        id: number, 
        name: string,
        price: number, 
        quantity: number, 
        public downloadSizeMB: number)
      
    {
        super(id,name,price,quantity)
        //this.downloadSizeMB = downloadSizeMB


    }
    getDownloadInfo(){
        return `${this.name} is downloading. size: ${this.downloadSizeMB}`
    }
    sell(unit:number):string{
        return `Digital product ${this.name} sold ${unit} time(s).no stock deducted`
    }

}