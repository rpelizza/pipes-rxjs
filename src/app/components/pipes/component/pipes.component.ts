import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PipeFoundInterface, RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';

@Component({
	selector: 'app-pipes',
	templateUrl: './pipes.component.html',
	styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
	private mockedPipes: Array<RxjsInterface> = mockPipes as Array<RxjsInterface>;
	public pipeFound: Array<PipeFoundInterface> = [];

	constructor(private readonly _route: ActivatedRoute, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this._route.paramMap.subscribe((params) => {
			this.getPipeById(params.get('id') as string);
			this.createVideoComponent();
		});
	}

	private createVideoComponent(): void {
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		document.body.appendChild(tag);
	}

	private getPipeById(id: string): Array<PipeFoundInterface> {
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

	public errorVideo(): void {
		this._snackBar.open('Video não encontrado / Falha ao carregar', 'Fechar');
	}
}
