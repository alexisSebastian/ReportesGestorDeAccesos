import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { CuentasSinUsoComponent } from './cuentas-sin-uso/cuentas-sin-uso.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        PagesComponent,
        CuentasSinUsoComponent
    ],
    exports: [
        PagesComponent,
        CuentasSinUsoComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {

}

