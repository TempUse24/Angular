import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productsData: Product[]=[];


  constructor() { 

    this.productsData[0]=new Product("t1023", "Tata", "Dish TV", 10, 2500);
    this.productsData[1]=new Product("t6547", "Tata", "Salt", 100, 10000);
    this.productsData[2]=new Product("t8w93", "Tata", "Tea", 10, 2500);

    this.productsData[3]=new Product("a3543", "Airtel", "Cromecast", 5, 3000);
    this.productsData[4]=new Product("a8545", "Airtel", "Wifi", 7, 38598);
    this.productsData[5]=new Product("a3546", "Airtel", "SimCard", 10, 7600);

    this.productsData[6]=new Product("w2893", "Wipro", "Bulb", 50, 40050);
    this.productsData[7]=new Product("w6579", "Wipro", "Perfume", 35, 5849);
    this.productsData[8]=new Product("w5489", "Wipro", "Soap", 67, 6985);

    this.productsData[9]=new Product("p3264", "Philips", "TV", 2, 35000);
    this.productsData[10]=new Product("p7548", "Philips", "Bulb", 85, 89000);
    this.productsData[11]=new Product("p6589", "Philips", "Fan", 20, 98956);

    this.productsData[12]=new Product("w3788", "Whirlpool", "Refrigirator", 1, 65849);
    this.productsData[13]=new Product("w5400", "Whirlpool", "Washing Machine", 3, 57834);
    this.productsData[14]=new Product("w9859", "Whirlpool", "TV", 6, 872394);

    this.productsData[15]=new Product("s3896", "Samsung", "Mobile", 30, 300000);
    this.productsData[16]=new Product("s7t84", "Samsung", "Laptop", 54, 5498030);
    this.productsData[17]=new Product("s783o", "Samsung", "Watch", 64, 685795);

    this.productsData[18]=new Product("d3467", "Hp", "Laptop", 5, 70878);
    this.productsData[19]=new Product("d37eo", "Hp", "Printer", 7, 708078);
    this.productsData[20]=new Product("d3498", "Hp", "Mouse", 18, 489046);

    this.productsData[21]=new Product("f7658", "Fastrack", "Watch", 20, 40000);
    this.productsData[22]=new Product("s6879", "Skybags", "Bags", 25, 350800);
    this.productsData[23]=new Product("s7869", "Sleepwell", "Matress", 8, 75900);

    this.productsData[24]=new Product("u5674", "Usha", "Mixer", 15, 48479);
    this.productsData[25]=new Product("u8932", "Usha", "Fan", 10, 84990);
    this.productsData[26]=new Product("u4o80", "Usha", "Grinder", 5, 92384);
  }

  getProducts(): Product[]{
    return this.productsData;
  }  
}
