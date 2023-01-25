import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PipesInterface, RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';

@Component({
	selector: 'app-pipes',
	templateUrl: './pipes.component.html',
	styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
	private mockedPipes: Array<RxjsInterface> = mockPipes as Array<RxjsInterface>;
	public pipeFound: Array<PipesInterface> = [];

	constructor(private readonly _route: ActivatedRoute) {}

	ngOnInit(): void {
		this.pipeFound = this.getPipeById(this.getIdFromRoute());
		console.log('objeto encontrado', this.pipeFound);
	}

	private getIdFromRoute(): string {
		return this._route.snapshot.paramMap.get('id') as string;
	}

	private getPipeById(id: string): Array<PipesInterface> {
		this.pipeFound = [];
		this.mockedPipes.forEach((theme) => {
			theme.pipes.forEach((pipe) => {
				if (pipe.pipeId === id) {
					const newObj = {
						group: theme.group,
						description: theme.description,
						icon: theme.icon,
						...pipe,
					};
					this.pipeFound.push(newObj);
				}
			});
		});
		return this.pipeFound;
	}
}
