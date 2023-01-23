import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	public searchForm!: FormGroup;
	public options: Array<string> = ['One', 'Two', 'Three'];

	constructor(private _formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.generateForm();
	}

	generateForm(): void {
		this.searchForm = this._formBuilder.group({
			search: [],
		});
	}
}
