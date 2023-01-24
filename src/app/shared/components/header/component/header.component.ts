import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DrawerService } from 'src/app/shared/services/drawer/drawer.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	public searchForm!: FormGroup;
	public options: Array<string> = ['One', 'Two', 'Three'];

	constructor(private _formBuilder: FormBuilder, private readonly _drawerService: DrawerService) {}

	ngOnInit(): void {
		this.generateForm();
	}

	private generateForm(): void {
		this.searchForm = this._formBuilder.group({
			search: [],
		});
	}

	public toggleDrawer() {
		if (this._drawerService.isDrawerOpen) {
			this._drawerService.close();
		} else {
			this._drawerService.open();
		}
	}
}
