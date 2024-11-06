import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { ModuloComponent } from './pages/1.datos-basicos/1.1.generales/modulo/modulo.component';
import { EstadosGeneralesComponent } from './pages/1.datos-basicos/1.1.generales/estados-generales/estados-generales.component';
import { ParametrosOperativosSistemaComponent } from './pages/1.datos-basicos/1.1.generales/parametros-operativos-sistema/parametros-operativos-sistema.component';
import { ParametrosOperativosUsuarioComponent } from './pages/1.datos-basicos/1.1.generales/parametros-operativos-usuario/parametros-operativos-usuario.component';
import { ParametrosOperativosEmpresaComponent } from './pages/1.datos-basicos/1.1.generales/parametros-operativos-empresa/parametros-operativos-empresa.component';
import { TipoMovimientoComponent } from './pages/1.datos-basicos/1.1.generales/tipo-movimiento/tipo-movimiento.component';
import { OperacionComponent } from './pages/1.datos-basicos/1.1.generales/operacion/operacion.component';
import { TipoMovimientoOperacionComponent } from './pages/1.datos-basicos/1.1.generales/tipo-movimiento-operacion/tipo-movimiento-operacion.component';
import { FondosComponent } from './pages/1.datos-basicos/1.1.generales/fondos/fondos.component';
import { ClaseCuentaComponent } from './pages/1.datos-basicos/1.1.generales/clase-cuenta/clase-cuenta.component';
import { TipoInformacionComponent } from './pages/1.datos-basicos/1.1.generales/tipo-informacion/tipo-informacion.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mmod',
    component: ModuloComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mesg',
    component: EstadosGeneralesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mpos',
    component: ParametrosOperativosSistemaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mpsu',
    component: ParametrosOperativosUsuarioComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mpem',
    component: ParametrosOperativosEmpresaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mtim',
    component: TipoMovimientoComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mope',
    component: OperacionComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mtmo',
    component: TipoMovimientoOperacionComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mfon',
    component: FondosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mclc',
    component: ClaseCuentaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mtif',
    component: TipoInformacionComponent,
    canActivate: [ AuthGuardService ]
  },




  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, DxButtonModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ]
})
export class AppRoutingModule { }
