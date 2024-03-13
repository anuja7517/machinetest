import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StdformComponent } from './shared/components/stdform/stdform.component';
import { StdtableComponent } from './shared/components/stdtable/stdtable.component';
import { ProductformComponent } from './shared/components/productform/productform.component';
import { ProductcardComponent } from './shared/components/productcard/productcard.component';
import { MaterialModule } from './shared/material/material.mod';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StdformComponent,
    StdtableComponent,
    ProductformComponent,
    ProductcardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
