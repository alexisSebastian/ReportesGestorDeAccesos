import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],

    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidenavComponent,
        NopagefoundComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidenavComponent,
        NopagefoundComponent
    ]
})

export class SharedModule { }
