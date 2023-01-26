import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './component/pipes.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [PipesComponent],
	imports: [CommonModule, PipesRoutingModule, MatTabsModule, MatCardModule],
})
export class PipesModule {}
