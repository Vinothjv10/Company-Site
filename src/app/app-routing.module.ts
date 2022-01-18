import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerPageComponent } from './career-page/career-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'careers', component: CareerPageComponent },

  { path: 'product', component: ProductsComponent },
  { path: 'sample', component: SampleComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
