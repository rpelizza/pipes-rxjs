import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	imports: [CommonModule, ReactiveFormsModule, FormsModule, MatIconModule],
	exports: [CommonModule, ReactiveFormsModule, FormsModule, MatIconModule],
})
export class SharedModule {}
