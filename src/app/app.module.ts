import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

import { HomeDashboardModule } from './home-dashboard/home-dashboard.module';
import { NoteService } from './services/note.service';
// import { PipesModule } from './pipes/pipes.module';
// import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HomeDashboardModule,
    AppMaterialModule,
    // PipesModule    
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
