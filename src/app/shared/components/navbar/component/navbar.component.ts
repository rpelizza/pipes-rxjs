import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	public pipes: Array<RxjsInterface> = mockPipes as Array<RxjsInterface>;
}
