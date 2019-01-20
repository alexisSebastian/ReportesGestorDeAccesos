import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CuentasSinUsoComponent } from './cuentas-sin-uso/cuentas-sin-uso.component';
import { UsuariosSesionesComponent } from './usuarios-sesiones/usuarios-sesiones.component';
import { DetalleConexionesDiaComponent } from './detalle-conexiones-dia/detalle-conexiones-dia.component';
import { DetalleUsuariosDiaComponent } from './detalle-usuarios-dia/detalle-usuarios-dia.component';
import { DistribucionConexionesDiaComponent } from './distribucion-conexiones-dia/distribucion-conexiones-dia.component';
import { DistribucionUsuariosDiaComponent } from './distribucion-usuarios-dia/distribucion-usuarios-dia.component';


const pagesRoutes: Routes = [

    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'cuentas-sin-uso', component: CuentasSinUsoComponent },
            {path: 'usuarios-sesiones', component: UsuariosSesionesComponent },
            {path: 'detalle-conexiones', component: DetalleConexionesDiaComponent },
            {path: 'detalle-usuarios', component: DetalleUsuariosDiaComponent },
            {path: 'distribucion-conexiones', component: DistribucionConexionesDiaComponent },
            {path: 'distribucion-usuarios', component: DistribucionUsuariosDiaComponent },
            {path: '', redirectTo: '/cuentas-sin-uso', pathMatch: 'full' }
        ]
     },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
