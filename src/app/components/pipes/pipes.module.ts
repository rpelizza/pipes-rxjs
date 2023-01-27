import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './component/pipes.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
	declarations: [PipesComponent],
	imports: [
		CommonModule,
		PipesRoutingModule,
		MatTabsModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatDividerModule,
		MatSnackBarModule,
		YouTubePlayerModule,
	],
})
export class PipesModule {}
