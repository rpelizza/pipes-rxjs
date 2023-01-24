import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DrawerService {
	private isOpen = true;
	private stateChanged = new Subject<boolean>();

	get isDrawerOpen() {
		return this.isOpen;
	}

	open() {
		this.isOpen = true;
		this.stateChanged.next(this.isOpen);
	}

	close() {
		this.isOpen = false;
		this.stateChanged.next(this.isOpen);
	}

	onStateChanged() {
		return this.stateChanged.asObservable();
	}
}
