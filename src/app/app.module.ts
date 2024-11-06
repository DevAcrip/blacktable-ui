import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { ModuloComponent } from './pages/1.datos-basicos/1.1.generales/modulo/modulo.component';
import { EstadosGeneralesComponent } from './pages/1.datos-basicos/1.1.generales/estados-generales/estados-generales.component';
import { ParametrosOperativosSistemaComponent } from './pages/1.datos-basicos/1.1.generales/parametros-operativos-sistema/parametros-operativos-sistema.component';
import { ParametrosOperativosUsuarioComponent } from './pages/1.datos-basicos/1.1.generales/parametros-operativos-usuario/parametros-operativos-usuario.component';
import { ParametrosOperativosEmpresaComponent } from './pages/1.datos-basicos/1.1.generales/parametros-operativos-empresa/parametros-operativos-empresa.component';
import { ClaseImagenComponent } from './pages/1.datos-basicos/1.1.generales/clase-imagen/clase-imagen.component';
import { ImagenesComponent } from './pages/1.datos-basicos/1.1.generales/imagenes/imagenes.component';
import { TipoMovimientoComponent } from './pages/1.datos-basicos/1.1.generales/tipo-movimiento/tipo-movimiento.component';
import { OperacionComponent } from './pages/1.datos-basicos/1.1.generales/operacion/operacion.component';
import { TipoMovimientoOperacionComponent } from './pages/1.datos-basicos/1.1.generales/tipo-movimiento-operacion/tipo-movimiento-operacion.component';
import { FondosComponent } from './pages/1.datos-basicos/1.1.generales/fondos/fondos.component';
import { ClaseCuentaComponent } from './pages/1.datos-basicos/1.1.generales/clase-cuenta/clase-cuenta.component';
import { ClaseInformacionComponent } from './pages/1.datos-basicos/1.1.generales/clase-informacion/clase-informacion.component';
import { TipoInformacionComponent } from './pages/1.datos-basicos/1.1.generales/tipo-informacion/tipo-informacion.component';
import { TipoActividadComponent } from './pages/1.datos-basicos/1.1.generales/tipo-actividad/tipo-actividad.component';
import { ActividadEconomicaComponent } from './pages/1.datos-basicos/1.1.generales/actividad-economica/actividad-economica.component';
import { TipoDocumentoSoporteComponent } from './pages/1.datos-basicos/1.1.generales/tipo-documento-soporte/tipo-documento-soporte.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloComponent,
    EstadosGeneralesComponent,
    ParametrosOperativosSistemaComponent,
    ParametrosOperativosUsuarioComponent,
    ParametrosOperativosEmpresaComponent,
    ClaseImagenComponent,
    ImagenesComponent,
    TipoMovimientoComponent,
    OperacionComponent,
    TipoMovimientoOperacionComponent,
    FondosComponent,
    ClaseCuentaComponent,
    ClaseInformacionComponent,
    TipoInformacionComponent,
    TipoActividadComponent,
    ActividadEconomicaComponent,
    TipoDocumentoSoporteComponent
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
