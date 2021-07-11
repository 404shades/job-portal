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
import { allHttpInterceptorProviders } from './core/interceptors/interceptors';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { effects } from './ngrx-store/effects';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    LoadingModule,
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    CoreModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: "BASE_API_URL", useFactory: getBaseUrl, deps: [] },
    ...allHttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
