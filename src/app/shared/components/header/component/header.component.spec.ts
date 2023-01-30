import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [MatAutocompleteModule],
			declarations: [HeaderComponent],
		});
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('deve instanciar o componente', () => {
		expect(component).toBeTruthy();
	});

	it('deve verificar o método toggleDrawer', () => {
		const toggleDrawer = (open: boolean) => {
			return !open;
		};

		expect(toggleDrawer(true)).toEqual(false);
		expect(toggleDrawer(false)).toEqual(true);
	});

	it('deve ter um método redirectToPipePage', () => {
		expect(component.redirectToPipePage).toBeTruthy();
	});

	it('deve ter um método search', () => {
		expect(component.search).toBeTruthy();
	});
});
