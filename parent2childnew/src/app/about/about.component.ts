<input type="text" [(ngModel)]="item">
<button (click)="pushItem()">&copy; Copy right goes to bharat kamal</button>
 
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
@Output()
public setItem=new EventEmitter<string>();
  item="";
 
  pushItem(){
    this.setItem.emit(this.item);
    this.item="";
  }
}
 
 
<app-about (setItem)="addItem($event)"></app-about>
<ul *ngFor="let item of list">
  <li>{{item}}</li>
</ul>