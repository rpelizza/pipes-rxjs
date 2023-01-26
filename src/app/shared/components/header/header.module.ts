import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './component/header.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
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
		MatMenuModule,
	],
	exports: [HeaderComponent],
})
export class HeaderModule {}
