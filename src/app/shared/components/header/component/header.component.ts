import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DrawerService } from 'src/app/shared/services/drawer/drawer.service';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';
import { PipesInterface, RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	private mockedPipes: Array<RxjsInterface> = mockPipes as Array<RxjsInterface>;
	public autocompleteOptions: Array<Partial<PipesInterface>> = [];

	constructor(private readonly _drawerService: DrawerService) {}

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

	public search($event: KeyboardEvent): void {
		const searchText = ($event.target as HTMLInputElement).value;
		this.autocompleteOptions = [];
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
				const pipeLinksLowerCase = this.textToLowerCase(this.removeSpecialCharactersFromText(pipe.pipeLinks));
				const pipeVideosLowerCase = this.textToLowerCase(this.removeSpecialCharactersFromText(pipe.pipeVideos));
				const themeGroupLowerCase = this.textToLowerCase(this.removeSpecialCharactersFromText(theme.group));
				const themeDescriptionLowerCase = this.textToLowerCase(
					this.removeSpecialCharactersFromText(theme.description)
				);
				if (
					pipeNameLowerCase.includes(searchText) ||
					pipeDescriptionLowerCase.includes(searchText) ||
					pipeTipsLowerCase.includes(searchText) ||
					pipeObservationToLowerCase.includes(searchText) ||
					pipeUtilitiesLowerCase.includes(searchText) ||
					pipeLinksLowerCase.includes(searchText) ||
					pipeVideosLowerCase.includes(searchText) ||
					themeGroupLowerCase.includes(searchText) ||
					themeDescriptionLowerCase.includes(searchText)
				) {
					searchResults.push({ pipeId: pipe.pipeId, pipeName: pipe.pipeName });
				}
			});
		});
		if (searchResults.length > 0) {
			this.autocompleteOptions = searchResults;
		}
	}
}
