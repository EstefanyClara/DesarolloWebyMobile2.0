import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';


export const routes: Routes = [
    
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},

];
