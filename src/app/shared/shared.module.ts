import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MatIconModule],
	exports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MatIconModule],
})
export class SharedModule {}
