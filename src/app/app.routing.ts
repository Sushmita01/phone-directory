import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryManagementComponent } from './modules/directory-management/components/directory-management/directory-management.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'directory', pathMatch: 'full' },
    { path: 'directory', component: DirectoryManagementComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
