import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DetailComponent } from './detail/detail.component';
import { NewProjectComponent } from './new-project/new-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'project/:id',
    component: DetailComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  },
  {
    path: 'admin',
    component: ProjectListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
