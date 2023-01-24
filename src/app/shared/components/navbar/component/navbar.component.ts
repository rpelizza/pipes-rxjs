import { Component, ChangeDetectionStrategy } from '@angular/core';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public pipes: Array<any> = mockPipes;
}
