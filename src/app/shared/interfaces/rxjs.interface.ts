export interface RxjsInterface {
	group: string;
	icon: string;
	description: string;
	pipes: Array<PipesInterface>;
}

export interface PipesInterface {
	pipeId: string;
	pipeName: string;
	pipeDescription: string;
	pipeUtilities: Array<string>;
	pipeTips: Array<string>;
	pipeObservation: Array<string>;
	pipeLinks: string;
	pipeVideos: string;
}
