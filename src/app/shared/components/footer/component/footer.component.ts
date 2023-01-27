import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	public redirectToExternalUrl(url: string, isEmail?: boolean): void {
		if (isEmail) {
			window.open(`mailto:${url}`, '_blank');
		} else {
			window.open(url, '_blank');
		}
	}
}
