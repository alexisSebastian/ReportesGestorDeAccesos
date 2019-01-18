import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { CuentasSinUsoComponent } from './cuentas-sin-uso/cuentas-sin-uso.component';
import { PagesComponent } from './pages.component';
import { UsuariosSesionesComponent } from './usuarios-sesiones/usuarios-sesiones.component';
import { DetalleUsuariosDiaComponent } from './detalle-usuarios-dia/detalle-usuarios-dia.component';
import { DetalleConexionesDiaComponent } from './detalle-conexiones-dia/detalle-conexiones-dia.component';
import { DistribucionConexionesDiaComponent } from './distribucion-conexiones-dia/distribucion-conexiones-dia.component';
import { DistribucionUsuariosDiaComponent } from './distribucion-usuarios-dia/distribucion-usuarios-dia.component';


@NgModule({
    declarations: [
        PagesComponent,
        CuentasSinUsoComponent,
        UsuariosSesionesComponent,
        DetalleUsuariosDiaComponent,
        DetalleConexionesDiaComponent,
        DistribucionConexionesDiaComponent,
        DistribucionUsuariosDiaComponent
    ],
    exports: [
        PagesComponent,
        CuentasSinUsoComponent,
        UsuariosSesionesComponent,
        DetalleUsuariosDiaComponent,
        DetalleConexionesDiaComponent,
        DistribucionConexionesDiaComponent,
        DistribucionUsuariosDiaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {

}

