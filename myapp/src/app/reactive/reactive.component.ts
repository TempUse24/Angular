import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validator } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  productForm = new FormGroup({
    productid: new FormControl(''),
    brand: new FormControl(''),
    description: new FormControl(''),
    qty: new FormControl(0),
    price: new FormControl(0),
  });

  onSubmit() {
    alert('Successfully submit');
    console.error(this.productForm);
  }
}
