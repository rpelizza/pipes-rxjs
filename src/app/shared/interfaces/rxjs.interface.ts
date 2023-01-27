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
	pipeObservation: string;
	pipeLink: string;
	pipeVideo: string;
}

export interface PipeFoundInterface {
	group: string;
	description: string;
	icon: string;
	pipeId: string;
	pipeName: string;
	pipeDescription: string;
	pipeUtilities: Array<string>;
	pipeTips: Array<string>;
	pipeObservation: string;
	pipeLink: string;
	pipeVideo: string;
}
