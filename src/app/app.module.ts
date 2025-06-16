import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { HotDealsComponent } from './components/hot-deals/hot-deals.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { ElectronicsComponent } from './components/shopping-cart/filters/select-category/electronics/electronics.component';
import { LifestyleComponent } from './components/shopping-cart/filters/select-category/lifestyle/lifestyle.component';
import { HomeapplianceComponent } from './components/shopping-cart/filters/select-category/homeappliance/homeappliance.component';
import { DecorationComponent } from './components/shopping-cart/filters/select-category/decoration/decoration.component';
import { PersonalgroomingComponent } from './components/shopping-cart/filters/select-category/personalgrooming/personalgrooming.component';
import { ElectronicItemsComponent } from './components/shopping-cart/filters/select-category/electronics/electronic-items/electronic-items.component';
import { DecorationItemsComponent } from './components/shopping-cart/filters/select-category/decoration/decoration-items/decoration-items.component';
import { HomeapplianceItemComponent } from './components/shopping-cart/filters/select-category/homeappliance/homeappliance-item/homeappliance-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    HotDealsComponent,
    CartComponent,
    CartItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CartpageComponent,
    ElectronicsComponent,
    LifestyleComponent,
    HomeapplianceComponent,
    DecorationComponent,
    PersonalgroomingComponent,
    ElectronicItemsComponent,
    DecorationItemsComponent,
    HomeapplianceItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
