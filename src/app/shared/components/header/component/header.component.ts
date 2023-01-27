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

	private mockedPipes: Array<RxjsInterface> = mockPipes as Array<RxjsInterface>;
	public autoCompleteOptions: Array<Partial<PipesInterface>> = [];

	constructor(private readonly _drawerService: DrawerService, private readonly _router: Router) {}

	private removeSpecialCharactersFromText(text: string): string {
		return text
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^\w\s]/gi, '');
	}

	private textToLowerCase(text: string): string {
		return text.toLowerCase();
	}

	public toggleDrawer() {
		if (this._drawerService.isDrawerOpen) {
			this._drawerService.close();
		} else {
			this._drawerService.open();
		}
	}

	public redirectToPipePage(pipeId: string) {
		if (pipeId === '') {
			this._router.navigate(['/home']);
		} else {
			this._router.navigate([`/pipes/${pipeId}`]);
		}

		this.autoCompleteOptions = [];
		this.inputRef.nativeElement.value = '';
	}

	public search($event: KeyboardEvent): void {
		const searchText = ($event.target as HTMLInputElement).value;
		this.autoCompleteOptions = [];
		const searchResults: Array<Pick<PipesInterface, 'pipeId' | 'pipeName'>> = [];
		if (!searchText) {
			return;
		}
		this.mockedPipes.forEach((theme) => {
			theme.pipes.forEach((pipe) => {
				const pipeNameLowerCase = this.textToLowerCase(this.removeSpecialCharactersFromText(pipe.pipeName));
				const pipeDescriptionLowerCase = this.textToLowerCase(
					this.removeSpecialCharactersFromText(pipe.pipeDescription)
				);
				const pipeUtilitiesLowerCase = this.textToLowerCase(
					this.removeSpecialCharactersFromText(pipe.pipeUtilities.toString())
				);
				const pipeTipsLowerCase = this.textToLowerCase(
					this.removeSpecialCharactersFromText(pipe.pipeTips.toString())
				);
				const pipeObservationToLowerCase = this.textToLowerCase(
					this.removeSpecialCharactersFromText(pipe.pipeObservation.toString())
				);
				const pipeVideoLowerCase = this.textToLowerCase(this.removeSpecialCharactersFromText(pipe.pipeVideo));
				const searchTextLowerCase = this.textToLowerCase(this.removeSpecialCharactersFromText(searchText));
				if (
					pipeNameLowerCase.includes(searchTextLowerCase) ||
					pipeDescriptionLowerCase.includes(searchTextLowerCase) ||
					pipeUtilitiesLowerCase.includes(searchTextLowerCase) ||
					pipeTipsLowerCase.includes(searchTextLowerCase) ||
					pipeObservationToLowerCase.includes(searchTextLowerCase) ||
					pipeVideoLowerCase.includes(searchTextLowerCase)
				) {
					searchResults.push({
						pipeId: pipe.pipeId,
						pipeName: pipe.pipeName,
					});
				}
			});
		});
		if (searchResults.length > 0) {
			this.autoCompleteOptions = searchResults;
		}
	}
}
