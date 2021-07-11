import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getBaseUrl } from './core/providers/base_url';
import { reducers,metaReducers } from './ngrx-store';
import { LoadingModule } from './modules/loading';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    LoadingModule,
    EffectsModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: "BASE_API_URL", useFactory: getBaseUrl, deps: [] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
