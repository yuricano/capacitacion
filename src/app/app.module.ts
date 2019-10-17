import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatListModule, MatNativeDateModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { TypoComponent } from './typo/typo.component';
import { IconsComponent } from './icons/icons.component';
import { UsuarioCursoComponent } from './usuario-curso/usuario-curso.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { Error404Component } from './error404/error404.component';
import { EmpleadosComponent } from './catalogos/empleados/empleados.component';
import { CursosComponent } from './catalogos/cursos/cursos.component';
import { ProveedoresComponent } from './catalogos/proveedores/proveedores.component';

@NgModule({
   declarations: [
      AppComponent,
      SidenavComponent,
      LoginComponent,
      UserprofileComponent,
      TablelistComponent,
      TypoComponent,
      IconsComponent,
      UsuarioCursoComponent,
      ReportesComponent,
      CatalogosComponent,
      Error404Component,
      EmpleadosComponent,
      CursosComponent,
      ProveedoresComponent
   ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: Error404Component
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'user',
        component: UserprofileComponent
      },
      {
        path: 'table',
        component: TablelistComponent
      },
      {
        path: 'usuario-curso',
        component: UsuarioCursoComponent
      },
      {
        path: 'catalogos',
        component: CatalogosComponent
      },
      {
        path: 'reportes',
        component: ReportesComponent
      },
      {
        path: 'catalogos/empleados',
        component: EmpleadosComponent
      },
      {
        path: 'catalogos/cursos',
        component: CursosComponent
      },
      {
        path: 'catalogos/proveedores',
        component: ProveedoresComponent
      },
      {
        path: '**',
        redirectTo: ''
      }

    ]),
  ],
 providers: [],
 bootstrap: [
    AppComponent
 ]
})
export class AppModule { }
