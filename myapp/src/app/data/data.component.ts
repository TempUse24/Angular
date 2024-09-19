import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  productData: Product[]=[];
  data="Enter the product brand";
  sum=0
  count=0

  product: Product=new Product("","","",0,0);

  onSubmit(){
    this.productData.push(this.product);
    console.log(this.product);
    console.log(this.productData)
  }

  constructor(private service: DataService){

    this.productData=service.getProducts();
    // console.log(this.productData);
  }

  productCount(data: string): number{
    this.count=0
    for(let i=0;i<this.productData.length;i++){
      if(this.productData[i].brand==data)
        this.count++;
    }
    return this.count;
  }

}
