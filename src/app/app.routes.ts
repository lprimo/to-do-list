import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'sign-in', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
    { path: 'to-do-list', loadChildren: () => import('./modules/to-do-list/to-do-list.module').then(m => m.ToDoListModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }