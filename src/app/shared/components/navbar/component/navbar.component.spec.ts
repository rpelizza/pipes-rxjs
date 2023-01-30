import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';
import { RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';

describe('NavbarComponent', () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [NavbarComponent],
		});
		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
	});

	it('deve instanciar o componente', () => {
		expect(component).toBeTruthy();
	});

	it('deve definir pipes como uma array de RxjsInterface', () => {
		expect(component.pipes).toEqual(mockPipes as Array<RxjsInterface>);
	});
});
