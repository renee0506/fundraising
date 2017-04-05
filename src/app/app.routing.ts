import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
