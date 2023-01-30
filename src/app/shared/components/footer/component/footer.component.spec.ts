import { FooterComponent } from './footer.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [FooterComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
	});

	it('Deve instanciar o componente', () => {
		expect(component).toBeTruthy();
	});

	it('deve abrir uma URL externa quando o método redirectToExternalUrlfor chamado', () => {
		const spyFn = spyOn(window, 'open');
		const url = 'https://www.example.com';
		const email = false;
		component.redirectToExternalUrl(url, email);
		expect(spyFn).toHaveBeenCalledWith(url, '_blank');
	});

	it('deve enviar um email quando o método redirectToExternalUrlfor chamado e passado o segundo parametro como true', () => {
		const spyFn = spyOn(window, 'open');
		const url = 'example@example.com';
		const email = true;
		component.redirectToExternalUrl(url, email);
		expect(spyFn).toHaveBeenCalledWith('mailto:' + url, '_blank');
	});
});
