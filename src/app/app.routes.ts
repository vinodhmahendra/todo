import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
// import { AuthguardService } from './services/authguard.service';
import { authGuard } from './services/authguard.service';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    // { path: 'welcome/:name', component: WelcomeComponent, canActivate:[AuthguardService] } , // Route parameter
    { path: 'welcome/:name', component: WelcomeComponent, canActivate:[authGuard] } , // Route parameter
    { path: 'todos',component: TodosComponent, canActivate:[authGuard]},
    { path: '**', component:ErrorComponent}
];
