import { RouterModule, Routes } from '@angular/router';
import { CuentasSinUsoComponent } from './pages/cuentas-sin-uso/cuentas-sin-uso.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    // se separa las rutas del dashboard del login
    // {
    //     path: '',
    //     component: PagesComponent,
    //     children: [
    //         {path: 'cuentas-sin-uso', component: CuentasSinUsoComponent },
    //         {path: '', redirectTo: '/cuentas-sin-uso', pathMatch: 'full' }
    //     ]
    //  },

    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
