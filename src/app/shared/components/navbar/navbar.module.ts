import { NgModule } from '@angular/core';
import { NavbarComponent } from './component/navbar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { SharedModule } from '../../shared.module';

@NgModule({
	declarations: [NavbarComponent],
	imports: [SharedModule, MatExpansionModule, MatListModule],
	exports: [NavbarComponent],
})
export class NavbarModule {}
