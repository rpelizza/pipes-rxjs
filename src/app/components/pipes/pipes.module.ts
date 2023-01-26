import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './component/pipes.component';

import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
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
		MatTooltipModule,
		YouTubePlayerModule,
	],
})
export class PipesModule {}
