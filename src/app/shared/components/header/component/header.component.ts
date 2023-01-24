import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DrawerService } from 'src/app/shared/services/drawer/drawer.service';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';
import { RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
	@ViewChild('inputSearch', { static: true }) inputSearch!: ElementRef;

	private mockedPipes: Array<RxjsInterface> = mockPipes as Array<RxjsInterface>;
	public options: Array<string> = ['One', 'Two', 'Three'];

	constructor(private readonly _drawerService: DrawerService) {}

	public toggleDrawer() {
		if (this._drawerService.isDrawerOpen) {
			this._drawerService.close();
		} else {
			this._drawerService.open();
		}
	}

	private observableSearch(): Observable<string> {
		return fromEvent<KeyboardEvent>(this.inputSearch.nativeElement as HTMLElement, 'keyup').pipe(
			map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
			map((text) => this.removeSpecialCharactersFromText(text)),
			map((text) => this.textToLowerCase(text)),
			debounceTime(1000),
			distinctUntilChanged()
		);
	}

	private removeSpecialCharactersFromText(text: string): string {
		return text
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^\w\s]/gi, '');
	}

	private textToLowerCase(text: string): string {
		return text.toLowerCase();
	}
	// find inside this.mockedPipes if text match with any description, group or inside the pipe array
	// for description, links, name, video or inside the utilities array
	// if match, add object to a new array
	ngAfterViewInit(): void {
		this.observableSearch().subscribe((text: string) => {
			console.log(text);
		});
	}
}
