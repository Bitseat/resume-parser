import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigureComponent } from './configure/configure.component';
import { EditorsComponent } from './editors/editors.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'drag-drop',
      component: DragDropComponent,
    },
    {
      path: 'editors',
      component: EditorsComponent,
    },
    {
      path: 'configure',
      component: ConfigureComponent,
    },
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
