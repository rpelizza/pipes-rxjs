export interface RxjsInterface {
	group: string;
	icon: string;
	description: string;
	pipes: Array<PipesInterface>;
}

export interface PipesInterface {
	pipeId: number;
	pipeName: string;
	pipeDescription: string;
	pipeUtilities: Array<string>;
	pipeLinks: string;
	pipeVideos: string;
}
