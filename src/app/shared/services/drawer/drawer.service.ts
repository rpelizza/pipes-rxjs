import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DrawerService {
	private isOpen = true;
	private stateChanged = new Subject<boolean>();

	public toggle() {
		this.isOpen = !this.isOpen;
		this.stateChanged.next(this.isOpen);
	}

	public onStateChanged(): Observable<boolean> {
		return this.stateChanged.asObservable();
	}
}
