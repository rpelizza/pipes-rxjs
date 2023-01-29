import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PipeFoundInterface, RxjsInterface } from 'src/app/shared/interfaces/rxjs.interface';
import { mockPipes } from 'src/app/shared/mock/pipes.mock';

@Component({
	selector: 'app-pipes',
	templateUrl: './pipes.component.html',
	styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
	@ViewChild('iframe', { static: false }) iframe!: ElementRef<HTMLIFrameElement>;

	private mockedPipes: Array<RxjsInterface> = mockPipes as Array<RxjsInterface>;
	public pipeFound: Array<PipeFoundInterface> = [];
	public gistUrl!: string;

	constructor(
		private readonly _route: ActivatedRoute,
		private _snackBar: MatSnackBar,
		private readonly _sanitizer: DomSanitizer
	) {}

	ngOnInit(): void {
		this._route.paramMap.subscribe((params) => {
			this.getPipeById(params.get('id') as string);
			this.createVideoComponent();
			this.getGistFromPipeFound();
		});
	}

	private getGistFromPipeFound(): void {
		this.pipeFound.forEach((pipe) => {
			if (pipe.pipeCode) {
				this.gistUrl = pipe.pipeCode;
			}
		});
	}

	private createGistDoc(): void {
		const doc = this.iframe.nativeElement.contentDocument as Document;
		if (doc) {
			const content = `
				<html>
				<head>
				  <base target="_parent">
				</head>
				<body>
				<script type="text/javascript" src="${this.gistUrl}"></script>
				</body>
			  </html>
			`;
			doc.open();
			doc.write(content);
			doc.close();
		}
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

	public tabSelected(event: { index: number; tab: unknown }): void {
		if (event.index === 2) {
			this.createGistDoc();
		}
	}

	public errorVideo(): void {
		this._snackBar.open('Video não encontrado / Falha ao carregar', 'Fechar');
	}
	public safeURL(url: string): string {
		return this._sanitizer.bypassSecurityTrustResourceUrl(url) as string;
	}
}
