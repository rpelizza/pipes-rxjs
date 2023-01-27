import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './component/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared.module';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
		SharedModule,
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
		MatAutocompleteModule,
		MatInputModule,
	],
	exports: [HeaderComponent],
})
export class HeaderModule {}
