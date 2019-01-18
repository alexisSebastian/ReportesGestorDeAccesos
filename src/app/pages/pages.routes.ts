import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CuentasSinUsoComponent } from './cuentas-sin-uso/cuentas-sin-uso.component';
import { UsuariosSesionesComponent } from './usuarios-sesiones/usuarios-sesiones.component';


const pagesRoutes: Routes = [

    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'cuentas-sin-uso', component: CuentasSinUsoComponent },
            {path: 'usuarios-sesiones', component: UsuariosSesionesComponent },
            {path: '', redirectTo: '/cuentas-sin-uso', pathMatch: 'full' }
        ]
     },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
