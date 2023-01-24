import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './component/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatAutocompleteModule,
		MatInputModule,
		MatMenuModule,
	],
	exports: [HeaderComponent],
})
export class HeaderModule {}
