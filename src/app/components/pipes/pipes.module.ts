import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './component/pipes.component';

@NgModule({
	declarations: [PipesComponent],
	imports: [CommonModule, PipesRoutingModule],
})
export class PipesModule {}
