import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';



// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // NopagefoundComponent,
    // CuentasSinUsoComponent,
    // HeaderComponent,
    // SidenavComponent,
    // BreadcrumbsComponent,
    // PagesComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
