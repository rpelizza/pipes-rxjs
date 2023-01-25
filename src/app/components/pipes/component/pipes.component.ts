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
		this._route.paramMap.subscribe((params) => {
			this.getPipeById(params.get('id') as string);
			console.log('objeto encontrado', this.pipeFound);
		});
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
