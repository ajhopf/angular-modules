import { NgModule } from "@angular/core";
import { CustomerComponent } from './pages/customer/customer.component';
import {AppModule} from "../app.module";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { HeaderComponent } from './components/header/header.component';

const customerRoutes: Routes = [
  {path: '', component: CustomerComponent},
  {path: ':id', component: CustomerDetailComponent}
]

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ]
})

export class CustomersModule {}
