import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoComponent } from './components/casino/casino.component';

const routes: Routes = [
  { path: '', component: CasinoComponent, pathMatch: 'full' },
  { path: 'casino', component: CasinoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
