import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomerComponent} from "../customers/pages/customer/customer.component";
import {CustomerDetailComponent} from "../customers/pages/customer-detail/customer-detail.component";

const productsRoutes: Routes = [
  {path: '', component: ProductsListComponent},
]

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes)
  ]
})
export class ProductsModule { }
