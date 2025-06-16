import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PageNotFoundComponent} from './components/shared/page-not-found/page-not-found.component'
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { ElectronicsComponent } from './components/shopping-cart/filters/select-category/electronics/electronics.component';
import { LifestyleComponent } from './components/shopping-cart/filters/select-category/lifestyle/lifestyle.component';
import { DecorationComponent } from './components/shopping-cart/filters/select-category/decoration/decoration.component';
import { PersonalgroomingComponent } from './components/shopping-cart/filters/select-category/personalgrooming/personalgrooming.component';
import { HomeapplianceComponent } from './components/shopping-cart/filters/select-category/homeappliance/homeappliance.component';

const routes: Routes = [
  {path: '', redirectTo:'/shop', pathMatch:'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingCartComponent},
  {path:'cartpage', component: CartpageComponent},
  {path:'select-category/electronics', component:ElectronicsComponent},
  {path:'select-category/lifestyle', component:LifestyleComponent},
  {path:'select-category/decoration', component:DecorationComponent},
  {path:'select-category/personalgrooming', component:PersonalgroomingComponent},
  {path:'select-category/homeappliance', component:HomeapplianceComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
