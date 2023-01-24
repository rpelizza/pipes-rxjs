import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawerService } from './shared/services/drawer/drawer.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	public isOpen: boolean = true;
	private subscription!: Subscription;

	constructor(private drawerService: DrawerService) {}

	ngOnInit() {
		this.subscription = this.drawerService.onStateChanged().subscribe((state: boolean) => {
			this.isOpen = state;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
