import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { FilterPipe } from '../pipes/filter/filter.pipe';


@NgModule({
  declarations: [HomeComponent, FilterPipe],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    AppMaterialModule,
  ]
})
export class HomeDashboardModule { }
