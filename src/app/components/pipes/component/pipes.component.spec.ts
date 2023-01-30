/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from '@angular/core/testing';
import { PipesComponent } from './pipes.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';
import { RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';

describe('PipesComponent', () => {
	let component: PipesComponent;

	beforeEach(() => {
		const domSanitizerStub = { bypassSecurityTrustResourceUrl: (url: string) => ({}) };

		const activatedRouteStub = { paramMap: of({ get: (id: string) => ({}) }) };

		TestBed.configureTestingModule({
			imports: [MatSnackBarModule],
			declarations: [PipesComponent],
			providers: [
				{ provide: DomSanitizer, useValue: domSanitizerStub },
				{ provide: ActivatedRoute, useValue: activatedRouteStub },
			],
		});

		component = TestBed.createComponent(PipesComponent).componentInstance;
	});

	describe('ngOnInit', () => {
		it('deveria chamar getPipeById com parametro id', () => spyOn(component, 'getPipeById'));

		it('deveria chamar createVideoComponent', () => spyOn(component, 'createVideoComponent'));

		it('deveria chamar getGistFromPipeFound', () => spyOn(component, 'getGistFromPipeFound'));

		afterEach(() => component.ngOnInit());
	});

	it('deve instanciar o componente', () => expect(component).toBeTruthy());

	it('deve ter as pipes mockadas', () => expect(component.mockedPipes).toEqual(mockPipes as Array<RxjsInterface>));

	it('deve ter encontrado a pipe', () => expect(component.pipeFound).toEqual([]));

	it('deve ter uma url do gist', () => expect(component.gistUrl).toBeUndefined());
});
