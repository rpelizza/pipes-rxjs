import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { DrawerService } from 'src/app/shared/services/drawer/drawer.service';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';
import { PipesInterface, RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';
import { Router } from '@angular/router';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@ViewChild('inputRef', { static: false }) inputRef!: ElementRef<HTMLInputElement>;

	public mockedPipes: Array<RxjsInterface> = mockPipes as Array<RxjsInterface>;
	public autoCompleteOptions: Array<Partial<PipesInterface>> = [];

	constructor(public _drawerService: DrawerService, public _router: Router) {}

	private formatText(text: string): string {
		const normalizedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
		return normalizedText.replace(/[^\w\s]/gi, '').toLowerCase();
	}

	public toggleDrawer() {
		this._drawerService.toggle();
	}

	public redirectToPipePage(pipeId: string) {
		this.autoCompleteOptions = [];
		this.inputRef.nativeElement.value = '';

		if (pipeId !== '') {
			this._router.navigate([`/pipes/${pipeId}`]);
		} else {
			this._router.navigate(['/home']);
		}
	}

	public search(event: KeyboardEvent): void {
		const searchText = this.formatText((event.target as HTMLInputElement).value);

		this.autoCompleteOptions = [];
		const searchResults = this.mockedPipes
			.flatMap(({ pipes }) => pipes)
			.filter((pipe) =>
				[
					pipe.pipeName,
					pipe.pipeDescription,
					pipe.pipeUtilities.toString(),
					pipe.pipeTips.toString(),
					pipe.pipeObservation.toString(),
				]
					.map(this.formatText)
					.some((text) => text.includes(searchText))
			)
			.map(({ pipeId, pipeName }) => ({ pipeId, pipeName }));

		if (searchResults.length > 0) {
			this.autoCompleteOptions = searchResults;
		}
	}
}
