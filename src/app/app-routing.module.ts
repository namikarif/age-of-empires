import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UnitsComponent} from './components/units/units.component';
import {UnitDetailsComponent} from './components/unit-details/unit-details.component';

const routers: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'units',
    component: UnitsComponent,
    data: {
      title: 'Units Page'
    }
  },
  {
    path: 'unit-detail',
    component: UnitDetailsComponent,
    data: {
      title: 'Unit Detail Page'
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
