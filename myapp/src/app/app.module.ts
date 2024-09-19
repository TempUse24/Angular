import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TestObservableComponent } from './test-observable/test-observable.component';

@NgModule({
  declarations: [AppComponent, ColorComponent, DataComponent, FormbuilderComponent, TestObservableComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  // bootstrap: [ColorComponent]
})
export class AppModule {}
