import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrafterContainerComponent } from './drafter/drafter-container/drafter-container.component';

const routes: Routes = [
  { path: '', component: DrafterContainerComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
