import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  { path: 'registration', component: RegComponent },
  { path: 'main', component: MainpageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path:'userlist', component: ListComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
