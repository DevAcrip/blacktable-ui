import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DataGridComponent } from './pages/data-grid/data-grid.component';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { ModuloComponent } from './pages/1.datos-basicos/1.1.generales/modulo/modulo.component';
import { EstadosGeneralesComponent } from './pages/1.datos-basicos/1.1.generales/estados-generales/estados-generales.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    ModuloComponent,
    EstadosGeneralesComponent
  ],
  imports: [
    DxButtonModule,
    BrowserModule,
    DxHttpModule,
    DxDataGridModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
