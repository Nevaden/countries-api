import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { RegionPipe } from './pipes/region.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailComponent,
    HeaderComponent,
    FilterPipe,
    RegionPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [DataService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
