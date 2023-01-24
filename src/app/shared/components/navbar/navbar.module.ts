import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [NavbarComponent],
	imports: [CommonModule, MatExpansionModule, MatIconModule, MatListModule],
	exports: [NavbarComponent],
})
export class NavbarModule {}
