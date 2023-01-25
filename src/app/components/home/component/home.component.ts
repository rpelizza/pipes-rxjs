import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
	ngOnInit(): void {
		console.log('ID: ', this.randomId());
	}

	randomId() {
		let id = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (let i = 0; i < 100; i++) {
			id += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return id;
	}
}
