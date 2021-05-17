import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogRemoveComponent } from './dialog-remove/dialog-remove.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import { DialogaddComponent } from './dialogadd/dialogadd.component';
import { UserFilterPipe } from './user-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    RegComponent,
    DialogRemoveComponent,
    DialogEditComponent,
    DialogAlertComponent,
    DialogaddComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule

  ],
  providers: [LoginComponent,DialogRemoveComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
