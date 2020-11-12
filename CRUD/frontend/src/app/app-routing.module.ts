import { AuthGuard } from './guards/auth.guard';
import { ManufacturerCrudComponent } from './views/manufacturer-crud/manufacturer-crud.component';
import { ManufacturerCreateComponent } from './components/manufacturer/manufacturer-create/manufacturer-create.component';
import { LoginComponent } from './views/login/login.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard]
},{
  path: 'products',
  component: ProductCrudComponent,
  canActivate: [AuthGuard]
},{
  path: 'manufacturers/create',
  component: ManufacturerCreateComponent,
  canActivate: [AuthGuard]
},{
  path: 'manufacturers',
  component: ManufacturerCrudComponent,
  canActivate: [AuthGuard]
},{
  path: 'login',
  component: LoginComponent
},
{
  path: "products/create",
  component: ProductCreateComponent,
  canActivate: [AuthGuard]
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
