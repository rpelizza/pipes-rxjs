import { TestBed } from '@angular/core/testing';
import { DrawerService } from './drawer.service';

describe('DrawerService', () => {
	let service: DrawerService;

	beforeEach(() => {
		TestBed.configureTestingModule({ providers: [DrawerService] });
		service = TestBed.inject(DrawerService);
	});

	it('deve iniciar o serviço', () => {
		expect(service).toBeTruthy();
	});

	it('deve verificar o status do toggle', () => {
		service.toggle();
		expect(service.toggle).toBeTruthy();
	});

	it('onStateChanged deve emitir um valor', (done) => {
		service.onStateChanged().subscribe((state) => {
			expect(state).toBeFalsy();
			done();
		});
		service.toggle();
	});
});
