import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {UnitsComponent} from './components/units/units.component';
import {UnitDetailsComponent} from './components/unit-details/unit-details.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// PRIMENG
import {SelectButtonModule} from 'primeng/selectbutton';
import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';


// ngrx store
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {metaReducers, reducers} from './reducers';
import {featureKey, reducer} from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsComponent,
    UnitDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    SelectButtonModule,
    SliderModule,
    CheckboxModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
