import { AppComponent } from './app.component';
import { DrawerService } from './shared/services/drawer/drawer.service';

describe('AppComponent', () => {
	let component: AppComponent;
	let drawerService: DrawerService;

	beforeEach(() => {
		drawerService = new DrawerService();
		component = new AppComponent(drawerService);
	});

	it('deve instanciar o componente', () => {
		expect(component).toBeTruthy();
	});

	it('deve verificar se o serviço foi passado ao componente', () => {
		expect(component.drawerService).toBeTruthy();
	});

	it('deve abrir o menu ao iniciar o componente', () => {
		spyOn(component, 'ngOnInit');
		component.ngOnInit();
		expect(component.isOpen).toBeTruthy();
		expect(component.ngOnInit).toHaveBeenCalled();
	});

	it('deve fechar o menu ao destruir o componete', () => {
		spyOn(component, 'ngOnDestroy');
		component.ngOnDestroy();
		expect(component.isOpen).toBeTruthy();
		expect(component.ngOnDestroy).toHaveBeenCalled();
	});
});
