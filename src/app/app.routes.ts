import { RouterModule, Routes } from '@angular/router';
import { CuentasSiNUsoComponent } from './pages/cuentas-si-nuso/cuentas-si-nuso.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [

    {path: 'cuentas-sin-uso', component: CuentasSiNUsoComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: LoginComponent },
    {path: '', redirectTo: '/cuentas-sin-uso', pathMatch: 'full' },

    {path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
